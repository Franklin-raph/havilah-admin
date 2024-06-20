import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { LuPlus } from "react-icons/lu";

const CustomerReviews = () => {
  return (
    <div>
        <div className='flex items-center justify-between mb-10'>
            <p>All Customers Reviews</p>
            <button className='flex items-center gap-1 bg-primary px-4 py-1 rounded-[20px] text-white'> <LuPlus /> Add Customer Review</button>
        </div>
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-left">
                <thead class="text-[14px] border-b">
                    <tr>
                        <th scope="col" class="px-6 py-3 th1 font-[700]">S/N</th>
                        <th scope="col" class="px-6 py-3 font-[700]">Title</th>
                        <th scope="col" class="px-6 py-3 font-[700]">Customer Name</th>
                        <th scope="col" class="px-6 py-3 font-[700]">Profession</th>
                        <th scope="col" class="px-2 py-3 font-[700]">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                        <td class="px-6 py-4">1</td>
                        <td class="px-6 py-4">Customer Title</td>
                        <td class="px-6 py-4">John Doe</td>
                        <td class="px-6 py-4">Data Anayst</td>
                        <td>
                        <button className='text-white bg-primary px-4 py-2 rounded-[4px]'>View</button>  
                        </td>
                    </tr>
                    <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                        <td class="px-6 py-4">2</td>
                        <td class="px-6 py-4">Customer Title</td>
                        <td class="px-6 py-4">Mary Doe</td>
                        <td class="px-6 py-4">CEO. Google Inc</td>
                        <td>
                        <button className='text-white bg-primary px-4 py-2 rounded-[4px]'>View</button>  
                        </td>
                    </tr>
                    <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                        <td class="px-6 py-4">3</td>
                        <td class="px-6 py-4">Customer Title</td>
                        <td class="px-6 py-4">Emmanuel</td>
                        <td class="px-6 py-4">CEO. Twitter</td>
                        <td>
                        <button className='text-white bg-primary px-4 py-2 rounded-[4px]'>View</button>  
                        </td>
                    </tr>
                    <tr style={{borderBottom:"1px solid #dcdcdc"}}>
                        <td class="px-6 py-4">4</td>
                        <td class="px-6 py-4">Customer Title</td>
                        <td class="px-6 py-4">Sam</td>
                        <td class="px-6 py-4">President of USA</td>
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

export default CustomerReviews