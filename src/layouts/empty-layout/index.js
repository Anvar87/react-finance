import React from 'react';
import Register from '../../views/Register'
import Login from '../../views/Login'



export default (prop) => {
  return (   
    <div className='anvar'>
    {prop.location.pathname === '/login' ? <Login/> : <Register/>}
    </div> 
    
  )
}