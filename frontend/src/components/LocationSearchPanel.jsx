import React from 'react'

function LocationSearchPanel(p) {

  
  

  //smaple arr ogf loaction
  const location =[
    " plot no .63 likkalyan nagar wathoda road nagpur 440035",
    " plot no .63 wayhoda nagar wathoda road nagpur 440035",
    " plot no .63 hiwari nagar nagar wathoda road nagpur 440035"
  ]

  return (
    <div>


{
    location.map((ele,key)=>{
      return  <div  key={key}onClick={()=>{p.setVehiclePanel(true),  p.setPanelOpen(false)}} className='flex active:border-black border-gray-200 border-2 bg-gray-200 rounded-xl  gap-3 items-center justify-start my-3'>
          <h2 className='h-8  p-2 flex items-center  justify-center   bg-gray-200 w-12  rounded-full'><i className="  text-lg font-bold ri-map-pin-line"></i></h2>
          <h4 className='  text-gray-900  font-semibold text-lg'>{ele} </h4>
        </div>
    })
}

        
    

         

 
     

    </div>
  )
}

export default LocationSearchPanel