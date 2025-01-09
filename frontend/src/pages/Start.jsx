import React from 'react'
import logo from '/white-uber-logo.png'
import { Link } from 'react-router-dom'


const Start = () => {
  return (
   <>
   <div>
    <div className="h-screen flex justify-between flex-col w-full bg-[url('/traffic-light.webp')] bg-center bg-cover">
        <img src={logo} alt="" className="w-24 pl-10 pt-10"/>
        <div className="bg-white pl-5  pr-5 flex flex-col justify-center items-center capitalize">
            <h2 className='font-bold text-3xl my-4   '>Get started with uber</h2>
            <Link to='/user-login' className='flex justify-center items-center mb-4 py-3 w-full font-bold hover:bg-gray-800  bg-black text-white rounded-md'><a href='/user-login'>Continue</a></Link>
        </div>
    </div>
   </div>
   </>
  )
}

export default Start