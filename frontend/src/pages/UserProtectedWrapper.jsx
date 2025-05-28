/* eslint-disable no-unused-vars */


import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { userDatacontext } from '../context/Usercontext';
import axios from 'axios';

export default function UserProtectedWrapper( {children}) {

   const token = localStorage.getItem('token')
    const navigate = useNavigate();
    const {user ,setUser} = useContext(userDatacontext)
    const [isLoading ,setIsLoading] = useState()
   
    useEffect(()=>{
      if(!token ){ navigate('/login')}

      const fetchProfile = async ()=>{
        try {
           const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        if(res.status === 200){
          setUser(res.data.user)
        }
        } catch (error) {
          console.log(`the err in user wrapper ${error}`);
          localStorage.removeItem('token')
          navigate('/login')
        }
        finally{
          setIsLoading(false)
        }
      }
      fetchProfile()

    },[token, navigate,setUser])

    if(isLoading){
      return(
        <div>Loading ....</div>
      )
    }


  return (
    <>
      {children}
    </>
  )
}
