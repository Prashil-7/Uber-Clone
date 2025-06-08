import React from 'react'
import profiile_Image from '../assets/profile-icon.svg'

function CaptainDetails() {
  return (

     <div className=' p-4 h-2/5'>
            <div className=' flex  justify-between p-4'>
              <div className='flex justify-start gap-4'>
                <img  className='h-10 w-10 object-cover  mt-3' src={profiile_Image} alt="" />
                <div>
                  <h4 className='text-lg font-medium '>prashil lonare</h4>
                  <p className='text-sm text-gray-400'>Basic level</p>
                </div>

              </div>

              <div className='text-center '>
                <h5 className='text-xl font-bold'> $250</h5>
                <p className='text-sm font-medium text-gray-400'>Earned</p>
              </div>
            </div>


            <div className='flex p-2 items-center text-center rounded-xl bg-gray-200 justify-between '>
              <div className='mt-2'>
                <i className=" text-2xl  ri-timer-line"></i>
                <h5 className='p-2 text-xl font-bold  '>10.2</h5>
                <p className='text-gray-500 text-sm'>Hours Online</p>
              </div>
              <div className='mt-2'>
                <i className="ri-speed-up-fill text-2xl"></i>
                <h5 className='p-2 text-xl font-bold'>10.</h5>
                <p className='text-gray-500 text-sm'>Hours Online</p>
                </div>
              <div className='mt-2 p-2'>
                <i className="ri-sticky-note-line text-2xl"></i>
                <h5 className='p-2 text-xl font-bold'>10.2</h5>
                <p className='text-gray-500 text-sm'>Hours Online</p>
                </div>
            </div>
      </div>



  )
}

export default CaptainDetails