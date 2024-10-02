import { useState } from "react"
import { useDispatch } from "react-redux";
import{urls} from "../config/apiUrls";
import {addUser}  from "../utils/store/slices/userSlice";
import {useNavigate} from 'react-router-dom';
import {httpPost} from "../service/http.service"
// import { axios } from 'axios';
// import { constants } from './../config/constants';



const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");

    const  Login = async ()=>{
        try {
           const user = await httpPost(urls.login,{username, password});
        //    const user = await axios.post(constants.url+urls.login,{username, password} ,{withCredentials:true});
           console.log('usersss',user)
            dispatch(addUser(user.data));
            return navigate(`/profile`);
        } catch (error) {
            console.log(error);
        }   
    }

  return (
    <>
    <div className="flex justify-center my-16">
    <div className="card bg-base-100 w-96 shadow-xl border border-cyan-100">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
    <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Username</span>
  </div>
  <input type="text" placeholder="" value={username} className="input input-bordered w-full max-w-xs" onChange={(e)=>{setUsername(e.target.value)}}/>
  
</label>
<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">Password</span>
  </div>
  <input type="password" placeholder=""  value={password} className="input input-bordered w-full max-w-xs" onChange={(e)=>{setPassword(e.target.value)}}/>
  
</label>

    
    <div className="card-actions justify-center mt-2">
      <button className="btn btn-primary" onClick={()=>{Login()}}>Login</button>
    </div>
  </div>
</div>
    </div>

    <dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    

    </>
   
  )
}

export default Login