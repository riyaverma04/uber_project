import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '/uber-logo.png'

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData]= useState({ });
    const submitHandler = (e) =>{
       e.preventDefault();
       setUserData({
        email: email,
        password: password,
       })
       console.log(userData);

       setEmail(' ');
       setPassword(' ')
       
       
        

    }
  return (
    <>
    <div className='flex flex-col justify-between h-screen pb-10'>
       
       <div>
       <img src={logo} alt="" className="w-24 pl-10 pt-10"/>
       <form action="" className='capitalize flex flex-col justify-center p-5  mt-5' onSubmit={(e)=>{
        submitHandler(e);
       
       }}>
        
            <h3 className='font-semibold'>what's your email</h3>
            <input type="email" name='email' placeholder='example@gamil.com' required className='bg-[#eeeeee] p-2 rounded mt-2'
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value);
            }}/>
            <h3 className='font-semibold mt-4'>Enter password</h3>
            <input required type="password" name='password' className='bg-[#eeeeee] p-2 mt-2 rounded '
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
                
            }} 
            
            />
            <br />
            <button type='submit' className='bg-black p-2 rounded text-white font-bold'>Login</button>



            <div>
            <p className='flex items-center w-full justify-center p-5'>don't have an account?<Link className=" text-blue-700" to='/user-signup'>create account</Link></p>
        </div>


        </form>
       </div>
        
        

        <div className="ml-5 mr-5">
        <Link to='/captain-signup' type='submit' className='bg-[#f0cc05] capitalize p-2 rounded text-white font-bold flex items-center w-full justify-center '>Sign Up as captain</Link>
        </div>

    </div>
    </>
  )
}

export default UserLogin