import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '/uber-logo.png'

const UserSignUp = () => {
   
    const [firstName, setFirstName ] = useState('')
    const [lastName, setLastName ]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword] = useState('')
    const [userInfo, setUserInfo] = useState({
       
    });


   


    const submitHandler = (e)=>{
        e.preventDefault();
        
       const user= {
            fullname: {
                firstName: firstName,
            lastName: lastName,
            },
            
            email: email,
            password:password,

        }

        setUserInfo(user)
        console.log(email)
        console.log(userInfo);
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('');
        
        


    }
  return (
    <>
    <div className='flex flex-col justify-between   h-screen'>

        <div>
        <img src={logo} alt="" className="w-24 pl-5 pt-5"/>

        <form action="" onSubmit={(e)=>{
        submitHandler(e);
       
       }} className='capitalize flex flex-col justify-center p-5 '>

        
           
            <h3 className='font-semibold'>Your firstname</h3>
            <input 
            className='bg-[#eeeeee] p-2 mt-2 rounded '
            value={firstName} 
            onChange={(e)=>{
                setFirstName(e.target.value);
            }}
            type="text" required name='firstname' placeholder='John'  />

            <h3 className='font-semibold'>Your lastname</h3>
            <input  className='bg-[#eeeeee] p-2 mt-2 rounded '  type="text" name='lastname' placeholder='Deo'
              value={lastName} 
              onChange={(e)=>{
                setLastName(e.target.value);
            }}
            />

            
            
            <h3 className='font-semibold'>email</h3>
            <input  className='bg-[#eeeeee] p-2 mt-2 rounded '  type="email" required name='email' placeholder='example@gmail.com'
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
            />
            <h3 className='font-semibold'>password</h3>
            <input  className='bg-[#eeeeee] p-2 mt-2 rounded '  type="password"  required name='password'  
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            />
            <br />
            <button type='submit' className='bg-lime-600 p-2 rounded text-white font-bold'>sign up</button>





            <div>
            <p className='flex items-center w-full justify-center p-5'>already have an account?<Link className=" text-blue-700" to='/user-login'>Login here</Link></p>
        </div>
        </form>
        </div>

       



        <div >
        {/* <Link to='/captain-signup' type='submit' className='bg-[#f0cc05] capitalize p-2 rounded text-white font-bold flex items-center w-full justify-center '>Sign Up as captain</Link> */}


        <p className='text-sm leading-tight text-slate-400 m-5'>By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.

</p>
        </div>
    </div>
    </>
  )
}

export default UserSignUp