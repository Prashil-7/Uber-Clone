import React, {  useRef, useState } from 'react'
import map from '../assets/images.jpeg'
import uber from '../assets/Uber_logo.png'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function CaptainRiding() {


  const FinishRideRef = useRef();
  const [finishride ,setFinishRide] =  useState(false);

    useGSAP(()=>{
      if(finishride){
        gsap.to(FinishRideRef.current,{
          transform: 'translateY(0)'
        })
      }else{
        gsap.to(FinishRideRef.current,{
          transform:'translateY(100%)'
        })
      }
    },[finishride])



  return (
     <div className='h-screen overflow-hidden relative'>
        <img className='w-13 m-3 absolute  left-5 top-5' src={uber.toString()} alt="Uber Logo" />

      <Link to='/captain-home' className='flex items-center justify-center rounded-full right-2 top-2 h-10 w-10 bg-white m-3 fixed '>
        <i className="ri-home-3-line  text-lg font-medium "></i>
      </Link>



      <div className='h-4/5 '>
        <img src={map} alt="map" className="h-full w-full object-cover" />
      </div>

      <div 
      
      className='h-1/5 bg-yellow-300 relative  flex items-center justify-between w-full'>
            
            <h5 className='top-0 w-[90%] pb-4 text-center absolute text-gray-500 '> <i className=" ri-arrow-up-s-line  text-2xl"></i></h5>

      <h4 className='text-xl ml-6 '>4 KM Away</h4>

      <button  onClick={()=>{setFinishRide(true)}}  
 className='bg-green-600 text-white  text-lg font-semibold p-3 mr-6 rounded-lg'>Complete Ride</button>



        <div ref={FinishRideRef} className='fixed w-full z-10 bottom-0  translate-y-full px-3 pt-12 bg-white '>
          <FinishRide  setFinishRide={setFinishRide}/>
            
        </div>





       
      </div>
    </div>
  )
}

export default CaptainRiding