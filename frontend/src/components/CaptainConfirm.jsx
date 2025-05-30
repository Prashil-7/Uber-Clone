import React from 'react'
import car from '../assets/car.jpeg'

function CaptainConfirm(props) {
  return (
     <div>
        
                <h2 onClick={()=>{
                    props.setCaptainConfirm(false)
                }} 
                
                className='  top-0  text-center'>
                    <i className="    text-gray-400 ri-arrow-down-s-line text-2xl"></i>
                    </h2>
                <h3 className='text-xl font-bold mb-4 text-center text-green-500'> Confirmation</h3>

                <div className='flex justify-between items-center'>
                    <img  className=' h-15' src={car} alt="car" />
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
              
                </div>
        
            </div>
  )
}

export default CaptainConfirm