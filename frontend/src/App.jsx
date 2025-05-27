import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserSignup from './pages/UserSignup'
import Userlogin from './pages/Userlogin'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'



function App() {
  return (
    <>
  <Routes>

    <Route  path='/' element={<Start/>} />
    <Route  path='/login' element={<Userlogin/>} />
    <Route  path='/signup' element={<UserSignup/>} />
    <Route  path='/captain-login' element={<Captainlogin/>} />
    <Route  path='/captain-signup' element={<CaptainSignup/>} />
    <Route  path='/home' element={<UserProtectedWrapper><Home/></UserProtectedWrapper>} ></Route>
    <Route path ='/user-logout' 
        element={ <UserProtectedWrapper>
      <UserLogout/>
    </UserProtectedWrapper>}  >
    </Route>

    <Route path ='/captain-home' element={
      <CaptainProtectWrapper>
        <CaptainHome/>
        </CaptainProtectWrapper>
      
  }/>
    
  </Routes>
    
    </>
  )
}

export default App