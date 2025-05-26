


import React, { useState } from 'react'
import {Link, Links} from 'react-router-dom'  

function CaptainSignup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastname] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [userData ,setuserData] =useState('')

  const submitHandler =(e)=>{
    e.preventDefault();
    setuserData({
      password:password,
      email:email,
      fullName:{
      firstName:firstName,
      lastName:lastName
      }
    })
    setEmail('')
    setFirstName('')
    setLastname('');
    setPassword('');

    
    
    

  }


  return (


        <div>
              
  <div className=' p-7 flex flex-col justify-between h-screen '>
      <div> 
          <img  className='w-19 h-25  pt-5  font-bold '   src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber-logo" />

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
            
            <button  className='bg-black  text-white rounded w-full px-4 py-2 text-lg  mt-8 placeholder:text-base font-bold border' >Sign Up as Driver</button>


                <p className='text-center pt-2 '>Already have a  Uber account? 
                  <Link  to='/captain-login'  className='text-blue-400'>Login here</Link></p>
          </form>
      </div>

      <div className='text-[10px] leading-tight text-gray-500'>
          By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.
      </div>

  </div>


        

    </div>


  )
}

export default CaptainSignup