import React from 'react'
import car from '../assets/car.jpeg'
import bike from '../assets/bike.png'
import auto from '../assets/auto.jpeg'

function VehiclePanel(props) {
  return (
    <div>

     <h2  onClick={()=> props.setVehiclePanelOpen(false)}  className='  top-0  text-center'><i className="    text-gray-400 ri-arrow-down-s-line text-2xl"></i></h2>
        <h3 className='text-xl font-bold mb-4'>Choose a Vehicle </h3>

        <div onClick={()=>{
          props.setConfirmRide(true)
        }}
         className='flex bg-gray-200 border border-2 border-transparent active:border-black  active:border-black rounded-2xl mb-3 p-1 items-center justify-between'>
          <img className='h-20 w-20 object-contain bg-white rounded-xl' src={car} alt="car Image" />
          <div className='ml-4 w-1/2 p-3'>
            <h4 className='font-semibold text-md'>
              Uber GO <span><i className="ri-user-3-line"> 4 </i></span>
            </h4>
            <h5 className='font-medium text-md'>2 mins away</h5>
            <p className='font-normal text-gray-600 text-sm'>Affordable, compact rides</p>
          </div>
          <h2 className='text-2xl font-semibold px-4 '>$193.2</h2>
        </div>

          <div onClick={()=>{
          props.setConfirmRide(true)
        }}className='flex bg-gray-200 border border-2 border-transparent active:border-black  active:border-black rounded-2xl mb-3 items-center justify-between'>
          <img className='h-20 w-20 object-contain bg-white rounded-xl' src={auto} alt="car Image" />
          <div className='ml-4 w-1/2 p-3'>
            <h4 className='font-semibold text-md'>
              Uber GO <span><i className="ri-user-3-line"> 4 </i></span>
            </h4>
            <h5 className='font-medium text-md'>2 mins away</h5>
            <p className='font-normal text-gray-600 text-sm'>Affordable, compact rides</p>
          </div>
          <h2 className='text-2xl font-semibold px-4 '>$193.2</h2>
        </div>

          <div onClick={()=>{
          props.setConfirmRide(true)
        }} className='flex bg-gray-200 border border-2 border-transparent active:border-black  active:border-black rounded-2xl mb-3 p-1 items-center justify-between'>
          <img className='h-20 w-20 object-contain bg-white rounded-xl' src={bike} alt="car Image" />
          <div className='ml-4 w-1/2 p-3'>
            <h4 className='font-semibold text-md'>
              Uber GO <span><i className="ri-user-3-line"> 4 </i></span>
            </h4>
            <h5 className='font-medium text-md'>2 mins away</h5>
            <p className='font-normal text-gray-600 text-sm'>Affordable, compact rides</p>
          </div>
          <h2 className='text-2xl font-semibold px-4 '>$193.2</h2>
        </div>
      </div>


    
  )
}

export default VehiclePanel