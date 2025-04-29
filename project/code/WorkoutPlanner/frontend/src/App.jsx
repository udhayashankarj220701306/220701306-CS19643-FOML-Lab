import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import LogIn from "./pages/LoginPage.jsx"
import SignUp from "./pages/SignUpPage.jsx"
import Navbar from "./components/Navbar.jsx"
import Profile from "./pages/Profile.jsx"
import { Toaster } from "react-hot-toast"
import { useUserStore } from "./stores/useUserStore.js"
import { useEffect } from "react"
 
import  LoadingSpinner  from "./components/LoadingSpinner.jsx"

function App() {
  const { user, checkAuth, checkauth } = useUserStore();
  useEffect(() => {
    checkAuth();
    console.log("app:",user);
  }, [checkAuth]);
  useEffect(() => {
    console.log("app:",user);
  }, [user]);
  if (checkauth) return <LoadingSpinner />
  return (
    <div>
      <div className="min-h-screen bg-gray-500 text-black relative overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={user ?(user.isDetailsFilled ? <HomePage /> :<Navigate to="/profile"/>):<Navigate to="/login" />  } />
          <Route path="/login" element={user ? <Navigate to="/" /> : <LogIn />} />
          <Route path="/signup" element={user ? <Navigate to="/profile" /> : <SignUp />} />
          <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        </Routes>
      </div>
      <Toaster />
    </div>
  )
}

export default App
