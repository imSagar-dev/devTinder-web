
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const user = useSelector(store=>store.user);
    const navigate = useNavigate();
    const getUser = () =>{
        try {
            if(!user){
              return  navigate('/login')
            }
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(()=>{
        getUser();
    },[])
    
  return (
    <div>Profile</div>
  )
}

export default Profile