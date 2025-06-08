import map from '../assets/images.jpeg'
import uber from '../assets/uber-driver.svg'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import OtpAuth from '../components/OtpAuth'




function CaptainHome() {

  const [ridePopUpPanel, setRidePopUpPanel] = useState(true)
  const [confirmRidePopUp, setConfirmRidePopUp] = useState(false)
  const [optAuth,setOptAuth] = useState(false)
  const ridePanelRef = useRef(null)
  const ConfirmRidePopUpRef = useRef(null);
  const OptRef = useRef(null)



    useGSAP(()=>{
      if(ridePopUpPanel){
        gsap.to(ridePanelRef.current,{
          transform: 'translateY(0)'
        })
      }else{
        gsap.to(ridePanelRef.current,{
          transform:'translateY(100%)'
        })
      }
    },[ridePopUpPanel])

    useGSAP(()=>{
      if(confirmRidePopUp){
        gsap.to(ConfirmRidePopUpRef.current,{
          transform: 'translateY(0)'
        })
      }else{
        gsap.to(ConfirmRidePopUpRef.current,{
          transform:'translateY(100%)'
        })
      }
    },[confirmRidePopUp])

      useGSAP(()=>{
      if(optAuth){
        gsap.to(OptRef.current,{
          transform: 'translateY(0)'
        })
      }else{
        gsap.to(OptRef.current,{
          transform:'translateY(100%)'
        })
      }
    },[optAuth])

  return (

<div> 
           <img className='w-16 absolute left-5 top-5' src={uber.toString()} alt="Uber Logo" />
      
      
      <div className='h-screen overflow-hidden '>
        

      <Link to='/captain-home' className='flex items-center justify-center rounded-full right-2 top-2 h-10 w-10 bg-white  fixed '>
        <i className="ri-logout-box-r-line text-lg font-medium "></i>
      </Link>
      

      <div className='h-3/5 '>
        <img src={map} alt="map" className="h-full w-full object-cover" />
      </div>

      <div className='h-2/5 '>
        <CaptainDetails/>
      </div>

        <div ref={ridePanelRef} className='fixed w-full z-10 bottom-0  translate-y-full px-3 pt-12 bg-white '>
          <  RidePopUp    setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUp={setConfirmRidePopUp}/>
        </div>

         <div ref={ConfirmRidePopUpRef} className='fixed w-full z-10 bottom-0  translate-y-full px-3 pt-12 bg-white '>
          <  ConfirmRidePopUp  setConfirmRidePopUp={setConfirmRidePopUp}
            setOptAuth={setOptAuth}
           setRidePopUpPanel={setRidePopUpPanel}/>
        </div>


         <div ref={OptRef} className='fixed w-full z-10 bottom-0  translate-y-full px-3 pt-12 bg-white '>
          <OtpAuth  setConfirmRidePopUp={setConfirmRidePopUp}
            setOptAuth={setOptAuth}
           setRidePopUpPanel={setRidePopUpPanel}/>
           
        </div>



     
  </div>
</div>


    
  )
}

export default CaptainHome