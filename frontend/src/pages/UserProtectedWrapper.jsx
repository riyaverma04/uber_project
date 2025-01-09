import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext';

const UserProtectedWrapper = ({children}) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const {user, setUser} = React.useContext(UserDataContext)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        if(!token) {
            navigate('/user-login');
        }
    },[token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((response)=>{
       if(response.status=== 200){
        setUser(response.data.user)
        setIsLoading(false)
       }
    }).catch((err)=>{
      console.log(err);
      localStorage.removeItem('token');
      navigate('/user-login')
    })


    if(isLoading){
      return(
        <>
        <h1>Loading...</h1>
        </>
      )
    }


  return (
    <>
    {children}

    </>
  )
}

export default UserProtectedWrapper