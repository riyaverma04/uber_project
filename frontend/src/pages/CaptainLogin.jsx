import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logo from '/uber-logo.png'
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';


const CaptainLogin = () => {
   const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const {captain, setCaptain }= React.useContext(CaptainDataContext);
     const navigate = useNavigate();
    
     const submitHandler=async(e)=>{
        e.preventDefault();
        const captainData = {
         email: email,
         password: password
        }


        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captainData);

       if(response.status ===200){
        const data = response.data;
        setCaptain(data.captain)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
       }




 
        setEmail('');
        setPassword('')
        
        
         
 
     }


  return (
    <>
    <div className='flex flex-col justify-between h-screen pb-10'>
       
       <div>
       <img src={logo} alt="" className="w-24 pl-10 pt-10"/>

       <h1 className=' m-9 mb-0 flex flex-col justify-center items-center text-3xl capitalize font-bold text-[#f0cc05]'>login as captain</h1>
       
       <form action="" className='capitalize flex flex-col justify-center p-5  mt-2' onSubmit={(e)=>{
        submitHandler(e);
       
       }}>
        
            <h3 className='font-semibold'>what's your email</h3>
            <input type="email"name='email' placeholder='example@gamil.com' required className='bg-[#eeeeee] p-2 rounded mt-2'
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
            <p className=' flex items-center w-full justify-center p-5'><Link className=" text-blue-700" to='/captain-signup'>Register as captain</Link></p>
        </div>


        </form>
       </div>
        
        

        <div className="ml-5 mr-5">
        <Link to='/user-signup' type='submit' className='bg-[#f0cc05] capitalize p-2 rounded text-white font-bold flex items-center w-full justify-center '>Sign Up as user</Link>
        </div>

    </div>
    </>
  )
}

export default CaptainLogin