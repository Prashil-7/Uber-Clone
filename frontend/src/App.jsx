import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'
import Userlogin from './pages/Userlogin'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'



function App() {
  return (
    <>
  <Routes>

    <Route  path='/' element={<Home/>} />
    <Route  path='/login' element={<Userlogin/>} />
    <Route  path='/signup' element={<UserSignup/>} />
    <Route  path='/captain-login' element={<Captainlogin/>} />
    <Route  path='/captain-signup' element={<CaptainSignup/>} />
    
    
  </Routes>
    
    </>
  )
}

export default App