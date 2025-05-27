/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'  
import axios from 'axios'
import  { userDatacontext  }  from '../context/Usercontext'

function UserSignup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastname] = useState('')
  const [userData ,setuserData] =useState('')
  const {user ,setUser} =  useContext(userDatacontext)

  const navigate = useNavigate()
 
  const submitHandler = async (e)=>{
    e.preventDefault();
     const newUser={
      password:password,
      email:email,
      fullname:{
      firstname:firstName,
      lastname:lastName
      }
    }

    const res= await axios.post(`${import.meta.env.VITE_API_BASE_URL}/user/register`,newUser) 

    if(res.status === 201){
      const data = res.data
      setUser(data.user)
      localStorage.setItem('token',data.token);

      navigate('/home')
      
    }




    setEmail('')
    setFirstName('')
    setLastname('');
    setPassword('');

    console.log(userData);
    
    

  }


  return (


        <div>
              
  <div className=' p-7 flex flex-col justify-between h-screen '>
      <div> 
        <img  className='w-16 mb-11 h-11 pt-5  font-bold '   src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/800px-Uber_logo_2018.svg.png" alt="Uber-logo" />

          <form action="" onSubmit={(e)=>{submitHandler(e)}} >


               <h3 className='text-xl mb-2 font-semibold '>Enter Your are Fullname</h3> 

            <div className=' flex gap-3  mb-2 '>
             
          <input  value={firstName} onChange={(e)=>setFirstName(e.target.value)} 
          className=' bg-[#eeeeee] rounded w-1/2 px-4 py-2 mb-2 text-lg placeholder:text-base border'
           type="text" required placeholder='FirstName' />

           <input  value={lastName} onChange={(e)=>setLastname(e.target.value)} 
          className=' bg-[#eeeeee] rounded w-1/2 px-4 py-2 mb-2 text-lg placeholder:text-base border'
           type="text" required placeholder='LastName' />
           
            </div>




          <h3 className='text-xl mb-2 font-semibold '>What's your E-mail</h3> 
          <input  
          value={email} onChange={(e)=>setEmail(e.target.value)} 
          className=' bg-[#eeeeee] rounded w-full px-4 py-2 mb-2 text-lg placeholder:text-base border'
           type="email" required placeholder='example@email.com' />
           
           <h3 className=' text-xl mb-2 font-semibold mt-4'>Enter Your Password</h3>
            <input  value={password} onChange={(e)=>setPassword(e.target.value)} 
             className='  bg-[#eeeeee] rounded w-full px-4 py-2 text-lg placeholder:text-base border'  type="password" required placeholder='Password' /> 
            
            <button  className='bg-black  text-white rounded w-full px-4 py-2 text-lg  mt-8 placeholder:text-base font-bold border' >Create Account</button>


                <p className='text-center pt-2 '>Already have a  Uber account? 
                  <Link  to='/login'  className='text-blue-400'>Login here</Link></p>
          </form>
      </div>

      <div className='text-[10px] leading-tight text-gray-500'>
          By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.
      </div>

  </div>


        

    </div>


  )
}

export default UserSignup