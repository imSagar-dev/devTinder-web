
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import { useDispatch } from "react-redux"
import { addUser, removeUser,  } from "../utils/store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { httpGet } from "../service/http.service";
import { urls } from "../config/apiUrls";
import { useEffect } from 'react';
const Body = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUser = async()=>{
    try {
      const response = await httpGet(urls.profile);
      console.log(response);
      dispatch(addUser(response));
      return navigate('/profile')
    } catch (error) {
      console.error(error);
      removeUser();
      return navigate('/login')
      
    }
  }

  useEffect(()=>{
    getUser();
  },[])
  return (
    <>
     <NavBar/>
     <Outlet/>
     <Footer/>
    </>
   
  )
}

export default Body