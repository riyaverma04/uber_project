import React ,{ useState} from 'react'
import{ Link, useNavigate} from  'react-router-dom'
import logo from '/uber-logo.png'
import axios from 'axios'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainSignUp = () => {

    const navigate = useNavigate();
    const {captain, setCaptain} = React.useContext(CaptainDataContext)

        const [firstName, setFirstName ] = useState('')
        const [lastName, setLastName ]= useState('')
        const [email, setEmail]= useState('')
        const [password, setPassword] = useState('')
        // const [captainInfo, setCaptainInfo] = useState({
           
        // });
        const [vehicleType, setVehicleType]= useState('');
        const [vehicleColor, setVehicleColor] = useState('');
        const [plate, setPlate] = useState('');
        const [capacity, setCapacity] = useState('');
    
    
       
    
    
        const submitHandler = async (e)=>{
            e.preventDefault();
            
           const newCaptain= {
                fullname: {
                    firstname: firstName,
                lastname: lastName,
                },
                
                email: email,
                password:password,
                vehicle:{
                    color: vehicleColor,
                    plate: plate,
                    capacity: capacity,
                    vehicleType: vehicleType,
                },
    
            }
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,newCaptain)

            if(response.status === 201){
                const data = response.data;
                setCaptain(data.captain);
                localStorage.setItem('token', data.token)
                navigate('/captain-home')
                 
            }
    
            
            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('');
            setCapacity('')
            setVehicleType('')
            setPlate('')
            setVehicleColor('')
            
            
    
    
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
            <h3 className='font-bold text-xl'>Vehicle information</h3>
            <div className="flex gap-2 mt-2 ">
            <input  className='bg-[#eeeeee] p-2 rounded '  type="text"  required name='vehiclecolor'  
            value={vehicleColor}
            placeholder='vehicle color'
            onChange={(e)=>{
                setVehicleColor(e.target.value);
            }}
            />
            <input  className='bg-[#eeeeee] p-2 rounded
            w-1/2 '  type="text"  required name='plate'  
            value={plate}
            placeholder='plate-no.'
            onChange={(e)=>{
                setPlate(e.target.value);
            }}
            />
            </div>
          
            <input  className='bg-[#eeeeee] p-2 mt-2 rounded '  type="number"  required name='capacity '  
            value={capacity}
            placeholder='capacity of vehicle'
            onChange={(e)=>{
                setCapacity(e.target.value);
            }}
            />

            <select required id="" className='bg-[#eeeeee] p-2 mt-2 rounded '
             value={vehicleType}
            onChange={(e)=>{
                setVehicleType(e.target.value)
                
            }}
            >
                <option  value="">select vehicle</option>
                <option  value="car">car</option>
                <option value="motorcycle">motorcycle</option>
                <option value="auto-rickshaw">auto-rickshaw</option>
            </select>
            <br />
            <button type='submit' className='bg-lime-600 p-2 rounded text-white font-bold'>sign up</button>





            <div>
            <p className='flex items-center w-full justify-center p-5'>already have an account?<Link className=" text-blue-700" to='/captain-login'>Login here</Link></p>
        </div>
        </form>
        </div>

        {/* <p className='text-sm leading-tight text-slate-400 m-5'>By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.

</p> */}

       



        
       
    </div>
    </>
        
    
  )
}

export default CaptainSignUp