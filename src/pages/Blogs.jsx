import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { LuPlus } from "react-icons/lu";


const Blogs = () => {

    const navigate = useNavigate()
    const admin = JSON.parse(localStorage.getItem('admin'))

    useEffect(() => {
        // Ensure user is logged in
        if (!admin) {
          navigate('/login');
          return; // Exit early if no user
        }
    
        // Check if the page has been reloaded
        if (!sessionStorage.getItem("reloaded")) {
          // Use sessionStorage to ensure it's only reloaded once per session
          sessionStorage.setItem("reloaded", "true");
          window.location.reload();
        }
      }, [navigate, admin]); 

  return (
    <div>
      <div className='flex items-center justify-between mb-10'>
        <p>All Blogs</p>
        <button onClick={() => navigate('/add-blog')} className='flex items-center gap-1 bg-primary px-4 py-1 rounded-[20px] text-white'> <LuPlus /> Add Blog</button>
      </div>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-left">
            <thead class="text-[14px] border-b">
                <tr>
                    <th scope="col" class="px-6 py-3 th1 font-[700]">S/N</th>
                    <th scope="col" class="px-6 py-3 font-[700]">Title</th>
                    <th scope="col" class="px-6 py-3 font-[700]">Category</th>
                    <th scope="col" class="px-6 py-3 font-[700]">Date Created</th>
                    <th scope="col" class="px-2 py-3 font-[700]">Action</th>
                </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                  <td class="px-6 py-4">1</td>
                  <td class="px-6 py-4">Blog Title</td>
                  <td class="px-6 py-4">Tech</td>
                  <td class="px-6 py-4">12 May 2024</td>
                  <td>
                    <button className='text-white bg-primary px-4 py-2 rounded-[4px]'>View</button>  
                  </td>
              </tr>
              <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                  <td class="px-6 py-4">2</td>
                  <td class="px-6 py-4">Blog Title</td>
                  <td class="px-6 py-4">Tech</td>
                  <td class="px-6 py-4">12 May 2024</td>
                  <td>
                    <button className='text-white bg-primary px-4 py-2 rounded-[4px]'>View</button>  
                  </td>
              </tr>
              <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                  <td class="px-6 py-4">3</td>
                  <td class="px-6 py-4">Blog Title</td>
                  <td class="px-6 py-4">Tech</td>
                  <td class="px-6 py-4">12 May 2024</td>
                  <td>
                    <button className='text-white bg-primary px-4 py-2 rounded-[4px]'>View</button>  
                  </td>
              </tr>
              <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                  <td class="px-6 py-4">4</td>
                  <td class="px-6 py-4">Blog Title</td>
                  <td class="px-6 py-4">Tech</td>
                  <td class="px-6 py-4">12 May 2024</td>
                  <td>
                    <button className='text-white bg-primary px-4 py-2 rounded-[4px]'>View</button>  
                  </td>
              </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Blogs