/* eslint-disable no-unused-vars */
import { useRef, useState } from 'react';
import UberLogo from '../assets/Uber_logo.png';
import map from '../assets/images.jpeg'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';



function Home() {
    const [pick, setPick] = useState('');
    const [destination ,setDestination] = useState('');
    const [panelOpen ,setPanelOpen] =useState(false);
    const panelRef = useRef(null)
    const   panelCloseRef= useRef(null)

  const submitHandler=(e)=>{
    e.preventDefault();
   
  }

  useGSAP(()=>{
    gsap.to(panelRef.current, {
      height: panelOpen ? '70%' : '0%'
    });
    gsap.to(panelCloseRef.current, {
      opacity: panelOpen ? '1' : '0'
    });
  }, [panelOpen]);


  return (
    <div className='h-screen relative'>
   <img className='w-16 absolute left-5 top-5' src={UberLogo.toString()} alt="Uber Logo" />

   <div>
    {/* image for temporary */}
    <img  className='h-screen w-full object-cover'  src={map.toString()}alt="" />
   </div>

      <div className='top-0 absolute   flex flex-col justify-end  h-screen w-full  '>
      <div className='h-[30%] p-6 bg-white relative'>
        <h5  ref={panelCloseRef}  onClick={()=>setPanelOpen(false)}  className='absolute top-5  opacity-0 right-3 text-2xl'><i className="ri-arrow-down-s-line "></i></h5>

    <h4 className='text-2xl font-semibold'>Find a trip</h4>
    <form onSubmit={(e)=>submitHandler(e)}>
        <div className='line h-16 w-1 absolute  top-[45%] left-12 bg-black '></div>
      <input value={pick}  onClick={()=>setPanelOpen(true)}  onChange={(e)=>{setPick(e.target.value)}} 
      className=' w-full bg-[#eee] border px-12 py-2 mt-5 text-base rounded-lg' type="text" placeholder=' Add a Pick-up Location ' />
      <input   value={ destination}  onClick={()=>setPanelOpen(true)} onChange={(e)=>{setDestination(e.target.value)}}
      className='bg-[#eee] border px-12 py-2  text-base mt-3 rounded-lg w-full' type="text" placeholder='Enter your destination' />
    </form>
      </div>

      <div className='h-[0] bg-white   '  ref={panelRef}>
        <section className='p-6'><LocationSearchPanel/></section>
      </div>
      </div>
    </div>
  )
}

export default Home