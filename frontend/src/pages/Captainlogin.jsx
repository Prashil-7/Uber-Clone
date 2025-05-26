import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Captainlogin() {

   const[email ,setEmail]= useState('');
     const [password ,setPassword] =useState('')
     // eslint-disable-next-line no-unused-vars
     const [cpatainData, setcpatainData] = useState({})
  
     const submitHandler =(e)=>{
        e.preventDefault();
        setcpatainData(
          {email:email
          ,password:password})
      setEmail('')
      setPassword('')
  
     }

     

  return (
       <div>
              
  <div className=' p-7 flex flex-col justify-between h-screen '>
      <div> 
        <img  className='w-19 h-25  pt-5  font-bold '   src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Uber-logo" />

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


                <p className='text-center pt-2 '>Want Join a fleet? 
                  <Link  to='/captain-signup'  className='text-yellow-600'>register as Captain</Link></p>
          </form>
      </div>

      <div>
         <Link  to='/login' className='bg-blue-200 text-black rounded w-full px-4 py-2 text-lg  mt-4  flex items-center justify-center placeholder:text-base font-bold border' > Sign in as User</Link>
      </div>

  </div>


        

    </div>
  )
}

export default Captainlogin