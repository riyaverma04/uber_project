import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import Home from './pages/home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'
import CaptainHome from './pages/CaptainHome'

const App = () => {
  return (
    <>
    {/* routers */}
    <Routes>
      <Route path='/' element={<Start/>}/>
      <Route path='/home' element={<UserProtectedWrapper><Home/></UserProtectedWrapper>}/>
      <Route path='/user-login' element={<UserLogin/>}/>
      <Route path='/user-signup' element={<UserSignUp/>}/>
      <Route path='/captain-login' element={<CaptainLogin/>}/>
      <Route path="/captain-signup" element={<CaptainSignUp/>}/>
      <Route path='/user-logout' element={<UserProtectedWrapper><UserLogout/></UserProtectedWrapper>}/>
      <Route path='/captain-home' element={
        <CaptainProtectedWrapper>
          <CaptainHome/>
        </CaptainProtectedWrapper>
      }/>
      
    </Routes>
    
    </>
  )
}

export default App