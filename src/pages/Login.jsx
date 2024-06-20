import React, { useState } from 'react'
import BtnLoader from '../components/BtnLoader'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleAdminLogin(e){
        e.preventDefault()
        localStorage.setItem('admin', true)
        navigate('/blogs')
    }

  return (
    <div className='flex flex-col items-center justify-center h-[100vh] w-[35%] mx-auto'>
      <p className='font-[600] mb-5 text-[20px]'>Havilah Admin Login</p>
      <form className='w-full shadow-md p-4' onSubmit={handleAdminLogin}>
        <div>
          <label className='block mb-2'>Email</label>
          <input 
              type='text'
              placeholder='johndoe@gmail.com'
              className="border rounded-[6px] outline-none w-full placeholder:text-[#B6B6B6] px-4 py-2"
          />
        </div>
        <div className='w-full mt-5'>
          <label className='block mb-2'>Password</label>
          <input 
              type='password'
              placeholder='****'
              className="border rounded-[6px] outline-none w-full placeholder:text-[#B6B6B6] px-4 py-2"
          />
        </div>
        {
          loading ?
          <BtnLoader />
          :
          <button type='submit' className='bg-primary w-full mt-7 py-2 rounded-[4px] text-white'>Login</button>
        }
      </form>
    </div>
  )
}

export default Login