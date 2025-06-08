import user from '../assets/profile-icon.svg'

function FinishRide(props) {
  return (
   <div className='h-1/2'>
               <h5 onClick={()=>{
                props.setFinishRide(false)
               }} 
               className='top-0 text-center -mt-9 mb-2'>
                <i className=" text-gray-400 ri-arrow-down-s-line text-2xl"></i>
                </h5>
                
            <h3 className='text-xl font-bold mt-3 mb-4'>Finish This Ride ! </h3>
   
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
   
           
   
   
            <div className='flex mb-3 gap-2 justify-between items-center flex-col mt-4'>
                
    
     <div className='w-full mt-[-3]  '>
        <div className=' border-b-1 border-gray-300 p-3    w-full gap-6 flex items-center '>
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
            <div className='mt-10'>
                    <h5 className='text-[18px] text-gray-600 font-medium  '>TRIP FARE</h5>
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
                
            </div>
                <button className='h-10 bg-green-500 w-full rounded-full text-lg mt-4 mb-2'>Finish Ride</button>
            </div>

            <p className='text-xs text-gray-400 p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo iste neque quos consequuntur velit reprehenderit obcaecati.</p>
   
         
       </div>
  )
}



export default FinishRide