import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { PiSignOut } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';


const TopNav = () => {

  const admin = JSON.parse(localStorage.getItem('admin'))
  const navigate = useNavigate()

  console.log(admin.data);

  async function signOutAdmin(){
    localStorage.clear()
    navigate('/admin-login')
    window.location.reload()
  }

  return (
    <div className='w-[82%] bg-white fixed shadow right-0 flex items-center justify-between py-[1rem] px-[3rem] z-[99]'>
      <p className='font-[700] text-[24px]'>Hello, Frank</p>
      <div className='flex items-center'>
        <dvi className='p-3 cursor-pointer bg-primary-color text-white rounded-full' onClick={signOutAdmin}>
          <p className='flex items-center gap-2'>
            <PiSignOut />
            <p>Sign Out</p>
          </p>
        </dvi>
      </div>
    </div>
  )
}

export default TopNav