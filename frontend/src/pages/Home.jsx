/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
import UberLogo from '../assets/Uber_logo.png';
import map from '../assets/images.jpeg'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import CaptainConfirm from '../components/CaptainConfirm'
import LookingForCaptain from '../components/LookingForCaptain';




function Home() {
    const [pick, setPick] = useState('');
    const [destination ,setDestination] = useState('');
    const [panelOpen ,setPanelOpen] =useState(false);
    const panelRef = useRef(null)
    const  panelCloseRef= useRef(null)
    const [VehiclePanelOpen ,setVehiclePanelOpen] = useState(false)
    const [confirmRide, setConfirmRide] =useState(false)
    const VehiclePanelRef = useRef(null)
    const ConfirmRef =useRef(null)
    const [lookingDriver ,setLookingDriver] =useState(false)
    const LookingDriverRef = useRef(null)
    const [captainconfirm ,setCaptainConfirm] = useState(false)
    const captainConfirmRef = useRef(null)

  const submitHandler=(e)=>{
    e.preventDefault();
  }

  useGSAP(()=>{
    if(panelOpen){
      gsap.to(panelRef.current,{
        height: '70%'
      })
      gsap.to(panelCloseRef.current,{
        opacity: 1
      })
    }else{
      gsap.to(panelRef.current,{
        height: '0%'
      })
      gsap.to(panelCloseRef.current,{
        opacity: 0
      })
    }
  },[panelOpen])

useGSAP(()=>{
  if(VehiclePanelOpen){
    gsap.to(VehiclePanelRef.current,{
     transform:'translateY(0)'
  })
  }else{
    gsap.to(VehiclePanelRef.current,{
     transform:'translateY(100%)'
  })
  }
},[VehiclePanelOpen])

useGSAP(()=>{
  if(confirmRide){
    gsap.to(ConfirmRef.current,{
     transform:'translateY(0)'
  })
  }else{
    gsap.to(ConfirmRef.current,{
     transform:'translateY(100%)'
  })
  }
},[confirmRide])

useGSAP(()=>{
  if(lookingDriver){
    gsap.to(LookingDriverRef.current,{
     transform:'translateY(0)'
  })
  }else{
    gsap.to(LookingDriverRef.current,{
     transform:'translateY(100%)'
  })
  }
},[lookingDriver])

useGSAP(()=>{
  if(captainconfirm){
    gsap.to(captainConfirmRef.current,{
     transform:'translateY(0)'
  })
  }else{
    gsap.to(captainConfirmRef.current,{
     transform:'translateY(100%)'
  })
  }
},[CaptainConfirm])


  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src={UberLogo.toString()} alt="Uber Logo" />

      <div>
        {/* image for temporary */}
        <img className='h-screen w-full object-cover' src={map.toString()} alt="" />
      </div>

      <div className='top-0 absolute flex flex-col justify-end h-screen w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className='absolute top-5 opacity-0 right-3 text-2xl cursor-pointer'
          >
            <i className="ri-arrow-down-s-line"></i>
          </h5>

          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className='line h-16 w-1 absolute top-[45%] left-12 bg-black'></div>
            <input
              value={pick}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setPick(e.target.value)}
              className='w-full bg-[#eee] border px-12 py-2 mt-5 text-base rounded-lg'
              type="text"
              placeholder=' Add a Pick-up Location '
            />
            <input
              value={destination}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setDestination(e.target.value)}
              className='bg-[#eee] border px-12 py-2 text-base mt-3 rounded-lg w-full'
              type="text"
              placeholder='Enter your destination'
            />
          </form>
        </div>

        <div className='h-0 bg-white' ref={panelRef}>
          <div className='p-6'><LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanelOpen} /></div>
        </div>
      </div>
      <div ref={VehiclePanelRef} className='bottom-0 fixed translate-y-full z-10 p-2 bg-white w-full'>
       <VehiclePanel setConfirmRide={setConfirmRide}  setVehiclePanelOpen={setVehiclePanelOpen}/>
    </div>

      <div ref={ConfirmRef} className='bottom-0 fixed translate-y-full z-10 p-2 bg-white w-full'>
        <ConfirmRide setConfirmRide={setConfirmRide}  setLookingDriver={setLookingDriver} />
    </div>

     <div  ref={LookingDriverRef} className='bottom-0 fixed translate-y-full z-10 p-2 bg-white w-full'>
        <LookingForCaptain setLookingDriver={setLookingDriver}   />
    </div>


      <div ref={captainConfirmRef}  className='bottom-0 fixed  z-10 p-2 bg-white w-full'>
        <CaptainConfirm  setCaptainConfirm={setCaptainConfirm}/>
    </div>



    </div>
  )
}

export default Home