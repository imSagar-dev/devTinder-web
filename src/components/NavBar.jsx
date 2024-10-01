import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../utils/store/slices/userSlice";
import { useNavigate } from "react-router-dom";



const NavBar = () => {
  const user = useSelector(store=>store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = async()=>{
    try {
      dispatch(removeUser());
      return navigate('/login')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="navbar bg-base-300 ">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl"> DevTinder 💬</a>
    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
        {user && <p>Welcome , {user.firstName}</p>}
        {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
      </div>
     {user && <div className="dropdown dropdown-end">
       
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a onClick={()=>{logout()}}>Logout</a></li>
        </ul>
      </div>}
    </div>
  </div>
  )
}

export default NavBar