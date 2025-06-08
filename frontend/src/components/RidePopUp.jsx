import captain from '../assets/profile-icon.svg'
import Payment from '../assets/payment.jpeg'

function RidePopUp(props) {
  return (
    <div>
            <h5 onClick={()=>{
              props.setRidePopUpPanel(false)
            }} 
            className='top-0 text-center -mt-9 mb-2'>
             <i className=" text-gray-400 ri-arrow-down-s-line text-2xl"></i>
             </h5>
             
         <h3 className='text-xl font-bold mb-4'>New Ride Available !</h3>

          <div className='flex items-center justify-between mr-2 bg-yellow-300  p-3 rounded-2xl'>
              <div className='flex items-center gap-3'>
                <img  className="h-10 w-10 ml-2 rounded-full object-cover "   src={captain} alt="" />
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
                 <i className="ri-map-pin-line text-lg bg-gray-200"></i>
                     <div className=' text-lg font-medium'>
                         <h3 className='text-xl'>63/256 -A</h3>
                         <p className='text-base text-gray-500 w-full'> lokkalyan nagar,nagpur,maharashtra</p>
                     </div>
                 </div>
                 <div className='  border-b-1 border-gray-300 p-3 flex mb-2   gap-6  items-center '>
                     <i className=" text-lg ri-map-pin-user-line bg-gray-200"></i>
                     <div className=' text-lg font-medium'>
                         <h3 className='text-xl'>63/256 -A</h3>
                         <p className='text-base text-gray-500'>lokkalyan nagar,nagpur,maharashtra</p>
                     </div>
                 </div>
                 
             </div>
             
             <div className='w-full mb-2 flex gap-3  '>
      <button onClick={()=>{props.setConfirmRidePopUp(true)}} 
       className='w-full text-lg  text-white font-bold bg-green-600 rounded-xl p-[2px]'>Accept Ride</button>

        <button onClick={()=>{
          props.setRidePopUpPanel(false)
        }} className='w-full text-lg  text-gray-500  bg-gray-300 rounded-xl p-[2px]'>Ignore Ride</button>

        
             </div>
         </div>

      
    </div>
  )
}

export default RidePopUp