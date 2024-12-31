import React ,{useState} from 'react'
import{ Link} from  'react-router-dom'
import logo from '/uber-logo.png'

const CaptainSignUp = () => {

        const [firstName, setFirstName ] = useState('')
        const [lastName, setLastName ]= useState('')
        const [email, setEmail]= useState('')
        const [password, setPassword] = useState('')
        const [captainInfo, setCaptainInfo] = useState({
           
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
    
            setCaptainInfo(user)
            console.log(email)
            console.log(captainInfo);
            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('');
            
            
    
    
        }
  return (
    
   
    <>
    <div className='flex flex-col justify-betweenh-screen'>

        <div>
        <img src={logo} alt="" className="w-24 pl-5 pt-5"/>

        {/* <h1 className=' m-9 mb-0 flex flex-col justify-center items-center text-3xl capitalize font-bold text-lime-600'>register as captain</h1> */}
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
            <p className='flex items-center w-full justify-center p-5'>already have an account?<Link className=" text-blue-700" to='/captain-login'>Login here</Link></p>
        </div>
        </form>
        </div>

        <p className='text-sm leading-tight text-slate-400 m-5'>By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.

</p>

       



        
       
    </div>
    </>
        
    
  )
}

export default CaptainSignUp