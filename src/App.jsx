import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import TopNav from './components/TopNav'
import SideNav from './components/SideNav'
import Blogs from './pages/Blogs'
import CustomerReviews from './pages/CustomerReviews'
import CreateBlog from './pages/CreateBlog'

function App() {

  const baseUrl = "https://google.com"
  
  // const [admin, setAdmin] = useState(false)

  return (
    <HashRouter>
      {localStorage.getItem('admin') && <TopNav />}
      <div className='flex items-center'>
        {localStorage.getItem('admin') && <SideNav />}
        <div className={localStorage.getItem('admin') ? `w-[82%] pt-[6rem] ml-auto px-[1.5rem] h-[100dvh]` : 'w-[100%]'}>
          <Routes>
            <Route path='/' element={<Login baseUrl={baseUrl}/>}/>
            <Route path='/blogs' element={<Blogs baseUrl={baseUrl}/>}/>
            <Route path='/customer-reviews' element={<CustomerReviews baseUrl={baseUrl}/>}/>
            <Route path='/add-blog' element={<CreateBlog />}/>
          </Routes>
        </div>
      </div>
    </HashRouter>
  )
}

export default App
