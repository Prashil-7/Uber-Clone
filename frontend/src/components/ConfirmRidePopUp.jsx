import React from 'react'
import user  from '../assets/profile-icon.svg'
import { Link } from 'react-router-dom'

function ConfirmRidePopUp(props) {
  return (
    <div className='h-screen'>
               <h5 onClick={()=>{
                props.setConfirmRidePopUp(false)
               }} 
               className='top-0 text-center -mt-9 mb-2'>
                <i className=" text-gray-400 ri-arrow-down-s-line text-2xl"></i>
                </h5>
                
            <h3 className='text-xl font-bold mb-4'>Confirm, To PICK UP </h3>
   
             <div className='flex items-center justify-between mr-2 bg-yellow-300  p-3 rounded-2xl'>
                 <div className='flex items-center gap-3'>
                   <img  className="h-10 w-10 ml-2 rounded-full object-cover "   src={user} alt="" />
                  <div > <h2 className='text-[15px] font-medium '>AYUSH LONARE </h2>
                       <div className='flex gap-2 mt-0.4'>
                     <p className='bg-green-500 p-1 rounded-lg font-bold  '>Online</p>
                     <p className='bg-green-500 p-1 rounded-lg  font-bold ' > Discount</p>
                     </div>
                     </div>
                   </div>
                 
                 <div>
                     <h1 className='text-lg font-bold'> $25.4</h1>
                       <h2 className='text-sm font-medium'>2.2 km</h2>
                 </div>
             </div>
   
           
   
   
            <div className='flex mb-3 gap-2 justify-between items-center flex-col'>
                
    
                <div className='w-full mt-[-3]  '>
                    <div className=' border-b-1 border-gray-300 p-3  mb-2  w-full gap-6 flex items-center '>
                    <i className="ri-map-pin-line text-lg "></i>
                        <div className=' text-lg font-medium'>
                            <p className='text-xs text-gray-400'>PICK UP</p>
                            <h3 className='text-xl'>63/256 -A</h3>
                            <p className='text-base text-gray-500 w-full'> lokkalyan nagar,nagpur,maharashtra</p>
                        </div>
                    </div>
                    <div className='  border-b-1 border-gray-300 p-3 flex mb-2   gap-6  items-center '>
                          <i className="ri-map-pin-line text-lg "></i>
                        <div className=' text-lg font-medium'>
                            <p className='text-xs text-gray-400'>DROP OFF</p>
                            <h3 className='text-xl'>63/256 -A</h3>
                            <p className='text-base text-gray-500'>lokkalyan nagar,nagpur,maharashtra</p>

                        </div>
                    </div>
                    <h5>TRIP FARE</h5>
                    <div className='flex items-center justify-between p-4'>
                        <div >
                            <p className='font-medium'> Online Pay</p>
                            <p className='font-medium border-b-1 border-gray-400'>Discount </p>
                            <p className='font-medium'>TOTAL</p>
                        </div>
                        <div>
                            <p className='font-medium'>$15</p>
                            <p className='font-medium border-b-1 w-full border-gray-400'>$10</p>
                            <p className='font-medium'>$25</p>
                        </div>
                    </div>   
                </div>
                
                <div className='w-full mb-2 flex gap-3  '>
         
             <button  onClick={()=> {props.setOptAuth(true)}} className=' flex justify-center w-full text-lg  text-white font-bold bg-green-600 rounded-xl p-[2px]'>GO TO PICK UP</button>
   
           <button onClick={()=>{
            props.setConfirmRidePopUp(false)
            props.setRidePopUpPanel(false)

           }} className='w-full text-lg  text-white  bg-red-500 rounded-xl p-[2px]'>Cancel Ride</button>
   
           
                </div>
            </div>
   
         
       </div>
  )
}

export default ConfirmRidePopUp