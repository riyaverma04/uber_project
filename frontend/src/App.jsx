import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'

const App = () => {
  return (
    <>
    {/* routers */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/user-login' element={<UserLogin/>}/>
      <Route path='/user-signup' element={<UserSignUp/>}/>
      <Route path='/captain-login' element={<CaptainLogin/>}/>
      <Route path="/captain-signup" element={<CaptainSignUp/>}/>
      
    </Routes>
    
    </>
  )
}

export default App