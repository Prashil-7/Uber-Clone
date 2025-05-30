import React from 'react'
import car from '../assets/car.jpeg'

function ConfirmRide(props) {
  return (
    <div>

        <h2 className='  top-0  text-center'>
            <i className="    text-gray-400 ri-arrow-down-s-line text-2xl"></i>
            </h2>
        <h3 className='text-xl font-bold mb-4'>Confirm your Ride</h3>

        <div className='flex gap-2 justify-between items-center flex-col'>
            <img className="h-30 "  src={car} alt="car" />

            <div className='w-full mt-5 '>
                <div className='  border-b-1 border-gray-400 p-3 flex mb-2  gap-6 flex-wrap items-center '>
                <i className="ri-map-pin-line text-lg bg-gray-200"></i>
                    <div className=' text-lg font-medium'>
                        <h3 className='text-xl'>63/256 -A</h3>
                        <p className='text-base text-gray-500'> lokkalyan nagar ,nagpur,maharashtra</p>
                    </div>
                </div>
                <div className='  border-b-1 border-gray-400 p-3 flex mb-2   gap-6 flex-wrap items-center '>
                    <i className=" text-lg ri-map-pin-user-line bg-gray-200"></i>
                    <div className=' text-lg font-medium'>
                        <h3 className='text-xl'>63/256 -A</h3>
                        <p className='text-base text-gray-500'> lokkalyan nagar ,nagpur,maharashtra</p>
                    </div>
                </div>
                <div className='  p-3  flex  mb-2 gap-6 flex-wrap items-center '>
                    <i className="ri-currency-fill text-lg  bg-gray-200"></i>
                    <div className=' text-lg font-medium'>
                        <h3 className='text-xl'>193.25</h3>
                        <p className='text-base text-gray-500'> Cash/Online</p>
                    </div>
                </div>  
            </div>
            <div className='w-full mb-2'>
                <button onClick={()=>{
                    props.setConfirmRide(false)
                    props.setLookingDriver(true)}}  className='w-full text-lg  text-white font-semibold bg-green-600 rounded-xl p-[2px]'>Confirm Ride</button>
            </div>
        </div>

    </div>
  )
}

export default ConfirmRide