import React from 'react'
import { Link } from 'react-router-dom'




function Start() {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  h-screen  flex justify-between flex-col w-full'>

      <img  className='w-16 mt-3 ml-8 h-10 pt-5  font-bold '   src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/800px-Uber_logo_2018.svg.png" alt="Uber-logo" />
      
      <div className='bg-white pb-7 px-4'>
        <h2 className='text-2xl font-bold text-center mt-3'>Get Started with Uber</h2>
        <Link   to="/login" className= ' flex items-center justify-center w-full bg-black text-white py-3 rounded-2xl mt-5'>Continue</Link>
      </div>
      </div>

    </div>
  )
}

export default Start