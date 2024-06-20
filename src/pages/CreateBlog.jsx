import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {

    const navigate = useNavigate()
    const [title, setTitle] = useState('')

  return (
    <div className='w-[70%] mx-auto pb-[3rem]'>
        <div className='mt-[2rem]'>
            <label className="text-[#121212] gont-[500] text-[20px] mb-1 block">Blog Title</label>
            <input
                type="text"
                onChange={e => setTitle(e.target.value)}
                placeholder="Enter blog title"
                className="border border-gray-300 text-[#707070] p-3 bg-transparent mt-1 rounded-[6px] outline-none w-full"
            />
        </div>
        <div className='mt-[1.5rem]'>
            <label className="text-[#121212] gont-[500] text-[20px] mb-1 block">Blog Category</label>
            <input
                type="text"
                onChange={e => setTitle(e.target.value)}
                placeholder="Enter blog category"
                className="border border-gray-300 text-[#707070] p-3 bg-transparent mt-1 rounded-[6px] outline-none w-full"
            />
        </div>
        <div className='mt-[1.5rem]'>
            <label className="text-[#121212] gont-[500] text-[20px] mb-1 block">Blog Image</label>
            <input
                type="file"
                onChange={e => setTitle(e.target.value)}
                placeholder="Enter blog category"
                className="border border-gray-300 text-[#707070] p-3 bg-transparent mt-1 rounded-[6px] outline-none w-full"
            />
        </div>
        <div className='mt-[1.5rem]'>
            <label className="text-[#121212] gont-[500] text-[20px] mb-1 block">Blog Description</label>
            <textarea cols="30" rows="5" 
                onChange={e => setTitle(e.target.value)}
                placeholder="Enter blog description"
                className="border border-gray-300 text-[#707070] resize-none p-3 bg-transparent mt-1 rounded-[6px] outline-none w-full"></textarea>
        </div>
        <button className='py-3 w-full bg-primary rounded-[8px] mt-2 text-white'>Create Blog</button>
    </div>
  )
}

export default CreateBlog