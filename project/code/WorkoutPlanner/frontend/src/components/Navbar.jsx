import {UserPlus, LogOut, LogIn ,Dumbbell, UserPen, Home} from 'lucide-react'
import { Link } from 'react-router-dom'
import { useUserStore } from '../stores/useUserStore.js'

const Navbar = () => {
  const { user,logout,login } = useUserStore();
  const isTrainer = user?.role==="Trainer";
  return (
    <header className="bg-gray-900 text-white flex justify-between items-center px-4 py-2">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white items-center  flex ">
            WorkoutPlanner
          </Link>
          <div className="flex flex-wrap gap-4 items-center">
            <Link to={"/"} className=" flex items-center py-2 px-4 text-white mx-2 hover:text-gray-300 transition duration-900">
              <Home className='mr-2' size={24} />
            </Link>
            {user ? (
              <>
                <Link to={"/profile"} className="rounded-xl bg-emerald-500 flex items-center py-2 px-4 text-white mx-2 hover:text-gray-300 transition duration-900">
                  <UserPen className='mr-2' size={24} /> Profile
                </Link>
                {isTrainer &&(
                  <Link to={"/workouts"} className="rounded-xl bg-emerald-500 flex items-center py-2 px-4 text-white mx-2 hover:text-gray-300 transition duration-900">
                    <Dumbbell className='mr-2' size={24} /> Workouts
                  </Link>
                )}
                <button onClick={logout} className="rounded-xl bg-emerald-500 flex items-center py-2 px-4 text-white mx-2 hover:text-gray-300 transition duration-900">
                  <LogOut className='mr-2' size={24} /> LogOut
                </button>
                {/* <Link to={"/logout"} className="rounded-xl bg-emerald-500 flex items-center py-2 px-4 text-white mx-2 hover:text-gray-300 transition duration-900">
                  <LogOut className='mr-2' size={24} /> LogOut
                </Link> */}
              </>
            ):(
              <>
                <Link to={"/signup"} className="rounded-xl bg-emerald-500 flex items-center py-2 px-4 text-white mx-2 hover:text-gray-300 transition duration-900">
                  <UserPlus className='mr-2' size={24} />SignUp 
                </Link>
                <Link to={"/login"} className="rounded-xl bg-emerald-500 flex items-center py-2 px-4 text-white mx-2 hover:text-gray-300 transition duration-900">
                  <LogIn className='mr-2' size={24} />LogIn 
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
      
  )
}

export default Navbar