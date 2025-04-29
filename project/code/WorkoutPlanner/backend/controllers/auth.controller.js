import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
// import dotenv from "dotenv"
import { redis } from "../libs/redis.js";
// dotenv.config();

const generateTokens = (userId) =>{
    const accessToken = jwt.sign({userId},process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:"24h"
    });
    const refreshToken = jwt.sign({userId},process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:"7d"
    });
    return { accessToken, refreshToken };

};
const storeRefreshToken = async (userId, refreshToken) => {
	await redis.set(`refresh_token:${userId}`, refreshToken, "EX", 7 * 24 * 60 * 60); // 7days
};

const setCookies = (res, accessToken, refreshToken) => {
	res.cookie("accessToken", accessToken, {
		httpOnly: true, // prevent XSS attacks, cross site scripting attack
		secure: process.env.NODE_ENV === "production",
		sameSite: "strict", // prevents CSRF attack, cross-site request forgery attack
		maxAge: 24 * 60 * 60 * 1000, // 24 hours
	});
	res.cookie("refreshToken", refreshToken, {
		httpOnly: true, // prevent XSS attacks, cross site scripting attack
		secure: process.env.NODE_ENV === "production",
		sameSite: "strict", // prevents CSRF attack, cross-site request forgery attack
		maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
	});
};


// SIGNIN LOGIC
export const signUp = async (req,res)=>{
    const {email,password,name} = req.body;
    try {
        // Checking user is already exist
        const isUserExisits = await User.findOne({email});
        if(isUserExisits){
            return res.status(400).json({message:"User already exists"});
        }
        const user = await User.create({email,password,name});
        // Authenticating User with token
        const {accessToken,refreshToken} = await generateTokens(user._id);
        await storeRefreshToken(user._id,refreshToken);
        setCookies(res,accessToken,refreshToken);
        console.log(user.id,user._id);
        res.status(201).json({user:{
            _id:user._id,
            name:user.name,
            email:user.email,
            role:user.role,
        },message:"User Created Successfully"});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}
export const logIn = async (req,res)=>{
    const {email,password} = req.body;
    
    try {
        const user = await User.findOne({email});
        if(user && (await user.comparePassword(password))){
            const {password,...rest} = user._doc;
            const {accessToken,refreshToken} = await generateTokens(user._id);
            await storeRefreshToken(user._id,refreshToken);
            setCookies(res,accessToken,refreshToken);
            return res.status(201).json({user:rest});
    	} else {
			res.status(400).json({ message: "Invalid email or password" });
		}
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ message: error.message });
	}
    // console.log("log in");
    // res.send("log in");
}
export const logOut = async (req, res) => {
    try {
        // console.log(req.cookies);
        // console.log(req.user);
        const refreshToken = req.cookies.refreshToken;
        if (refreshToken) {
            const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
            await redis.del(`refresh_token:${decoded.userId}`);
        }

        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");
        res.json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const profile = async (req,res)=>{
    try {
        // console.log("profile",req);
		res.json({user:req.user});
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
}

export const refreshToken = async (req,res)=>{
    try {
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return res.status(401).json({ message: "No refresh token provided" });
        }

        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const storedToken = await redis.get(`refresh_token:${decoded.userId}`);

        if (storedToken !== refreshToken) {
            return res.status(401).json({ message: "Invalid refresh token" });
        }

        const accessToken = jwt.sign({ userId: decoded.userId }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "24h" });

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 24 * 50 * 60 * 1000,
        });

        res.json({ message: "Token refreshed successfully" });
    } catch (error) {
        console.log("Error in refreshToken controller", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

export const updateUserData = async (req,res)=>{
    try {
        const {id} = req.params;
        const data = req.body;
        const user = await User.findByIdAndUpdate(id,data,{new:true});
        res.status(200).json({user:user});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}