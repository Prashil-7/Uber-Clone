import React from 'react'
import map from '../assets/images.jpeg'
import car from '../assets/car.jpeg'
import {Link} from 'react-router-dom'
function Riding() {
  return (
    <div className='h-screen overflow-hidden'>

      <Link to='/home' className='flex items-center justify-center rounded-full right-2 top-2 h-10 w-10 bg-white  fixed '>
        <i class="ri-home-3-line  text-lg font-medium "></i>
      </Link>



      <div className='h-1/2 '>
        <img src={map} alt="map" className="h-full w-full object-cover" />
      </div>

      <div className='h-1/2'>

  <div className='flex justify-between items-center mt-2'>
                      <img  className=' h-15 ml-6' src={car} alt="car" />
                        <div className='mr-4 text-right' >
                          <h2 className=' text-lg  text-gray-600 font-medium'>Prahil Lonare</h2>
                          <h4 className='text-lg font-semibold'>MH49BP1247</h4>
                          <p className='text-base text-gray-400'>Maruti Suzuki alto</p>
                        </div>
                  </div>
  
                  <div className='flex gap-2 justify-between items-center flex-col'>
                      <div className='w-full mt-5 '>
                          <div className='  border-b-1 border-gray-400 p-3 flex mb-2  gap-6 flex-wrap items-center '>
                          <i className="ri-map-pin-line text-lg bg-gray-200"></i>
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
                
                  </div>




        <button className='bg-green-400 w-[350px]  m-2 flex items-center justify-center    rounded-2xl  p-2'>Make a Payment</button>
      </div>
    </div>
  )
}

export default Riding