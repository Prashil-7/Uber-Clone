/* eslint-disable no-unused-vars */



import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'  
import { captainDataContext } from '../context/CaptainContext'
import axios from 'axios'

function CaptainSignup() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastname] = useState('')
  
  const [vehicleColor, setVehicleColor] = useState('')
  const [vehiclePlate, setVehiclePlate] = useState('')
  const [vehicleCapacity, setVehicleCapacity] = useState('')
  const [vehicleType, setVehicleType] = useState('')

  const {captain,setCaptain} = useContext(captainDataContext)
    

  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const captainData = {
        password: password,
        email: email,
        fullname: {
          firstname: firstName,
          lastname: lastName
        },
        vehicle: {
          color: vehicleColor,
          capacity: vehicleCapacity,
          plate: vehiclePlate,
          vehicleType: vehicleType
        }
      }

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/captain/register`,
        captainData,
        config
      )

    
      if (res.status === 201 || res.status === 200) {
        const data = res.data
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.')
      console.error('Registration error:', err)
    } finally {
      setLoading(false)
      
      // Only clear form if registration was successful
      if (!error) {
        setEmail('')
        setFirstName('')
        setLastname('')
        setPassword('')
        setVehicleCapacity('')
        setVehicleColor('')
        setVehiclePlate('')
        setVehicleType('')
      }
    }
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
            

               <h3 className='text-xl mb-2 font-semibold mt-4'>Vehicle Information</h3>
            
            <div className='flex gap-3 mb-2'>
              <input 
                value={vehicleColor} 
                onChange={(e)=>setVehicleColor(e.target.value)}
                className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 mb-2 text-lg placeholder:text-base border'
                type="text" 
                required 
                placeholder='Vehicle Color'
              />

              <input 
                value={vehiclePlate}
                onChange={(e)=>setVehiclePlate(e.target.value)}
                className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 mb-2 text-lg placeholder:text-base border'
                type="text"
                required
                placeholder='Vehicle Plate Number'
              />
            </div>

            <div className='flex gap-3 mb-2'>
              <select
                value={vehicleType}
                onChange={(e)=>setVehicleType(e.target.value)}
                className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 mb-2 text-lg placeholder:text-base border'
                required
              >
                <option value="">Select Vehicle Type</option>
                <option value="car">car</option>
                <option value="auto">auto</option>
                <option value="motorcycle">motorcycle</option>
              </select>

              <input
                value={vehicleCapacity}
                onChange={(e)=>setVehicleCapacity(e.target.value)}
                className='bg-[#eeeeee] rounded w-1/2 px-4 py-2 mb-2 text-lg placeholder:text-base border'
                type="number"
                required
                placeholder='Passenger Capacity'
                min="1"
                max="8"
              />
            </div>


            <button 
              disabled={loading}
              className={`${
                loading ? 'bg-gray-500' : 'bg-black'
              } text-white rounded w-full px-4 py-2 text-lg mt-8 placeholder:text-base font-bold border`}
            >
              {loading ? 'Signing Up...' : 'Sign Up as Driver'}
            </button>

            {error && (
              <div className="text-red-500 text-sm mt-2 text-center">
                {error}
              </div>
            )}

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