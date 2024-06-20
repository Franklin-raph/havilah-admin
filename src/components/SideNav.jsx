import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { GrBlog } from "react-icons/gr";
import { HiOutlineLogin } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";



const SideNav = () => {

  const navigate = useNavigate()
  const location = useLocation()

  async function signOutAdmin(){
    localStorage.clear()
    navigate('/')
    window.location.reload()
  }

  console.log(location.pathname);

  return (
    <div className='bg-primary w-[18%] h-[100dvh] fixed overflow-y-auto'>
      <h1 className='text-white text-[26px] text-center font-[700] my-5'>Havilah Admin</h1>
      <ul className='text-white'>
        <li className={location.pathname.includes("/blogs") || location.pathname === '/' ? `bg-blue-700 py-3 pl-3` : `py-3 pl-3`}>
          <Link to="/blogs" className='flex items-center gap-3'>
            <GrBlog fontSize={"22px"}/>
            <p>Blogs</p>
          </Link>
        </li>
        <li className={location.pathname.includes("/customer") ? `bg-blue-700 py-3 pl-3` :`py-3 pl-3`}>
          <Link to="/customer-reviews" className='flex items-center gap-4'>
            <FaRegUser fontSize={"22px"}/>
            <p>Customer Reviews</p>
          </Link>
        </li>
        <li className='flex items-center gap-4 bg-secondary-color py-3 pl-3 cursor-pointer' onClick={() => {
            window.location.assign('/')
            localStorage.clear()
        }}>
            <HiOutlineLogin fontSize={"22px"}/>
            <p>Log Out</p>
        </li>
      </ul>
    </div>
  )
}

export default SideNav