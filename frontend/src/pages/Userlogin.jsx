/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userDatacontext } from '../context/Usercontext';
import axios from 'axios';

function Userlogin() {
   const[email ,setEmail]= useState('');
   const [password ,setPassword] =useState('')
   const [userData, setuserData] = useState({})
   const {user ,setUser} = useContext(userDatacontext)

   const navigate = useNavigate()

   const submitHandler = async (e)=>{
      e.preventDefault();
     const userData =
      {email:email,
      password:password}

         const res =  await axios.post(`${import.meta.env.VITE_API_BASE_URL}/user/login`,userData)
            if(res.status === 201){
     const  data =res.data
     setUser(data.user);
     localStorage.setItem('token',data.token);
     navigate('/home')
   }
    setEmail('')
    setPassword('')
   }

  


   
  return (
    <div>
              
  <div className=' p-7 flex flex-col justify-between h-screen '>
      <div> 
        <img  className='w-16 mb-11 h-11 pt-5  font-bold '   src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/800px-Uber_logo_2018.svg.png" alt="Uber-logo" />

          <form action="" onSubmit={
            (e)=>{submitHandler(e)}
          }>
          <h3 className='text-xl mb-2 font-semibold '>What's your E-mail</h3> 
          <input  value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          className=' bg-[#eeeeee] rounded w-full px-4 py-2 mb-2 text-lg placeholder:text-base border'
           type="email" required placeholder='example@email.com' />
           
           <h3 className=' text-xl mb-2 font-semibold mt-5'>Enter Your Password</h3>
            <input  value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
             className='  bg-[#eeeeee] rounded w-full px-4 py-2 text-lg placeholder:text-base border'  type="password" required placeholder='Password' /> 
            
            <button  className='bg-black  text-white rounded w-full px-4 py-2 text-lg  mt-8 placeholder:text-base font-bold border' >Login</button>


                <p className='text-center pt-2 '>Don't have an Uber account? 
                  <Link  to='/signup'  className='text-blue-400'>Sign up</Link></p>
          </form>
      </div>

      <div>
         <Link  to='/captain-login' className='bg-yellow-200 text-black rounded w-full px-4 py-2 text-lg  mt-4  flex items-center justify-center placeholder:text-base font-bold border' > Sign in as Captain</Link>
      </div>

  </div>


        

    </div>
  )
}

export default Userlogin