import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

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
    <div>Blogs</div>
  )
}

export default Blogs