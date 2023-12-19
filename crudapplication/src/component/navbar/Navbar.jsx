import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     
         <div className=' flex m-5 gap-6 '>
          <NavLink  to="/home" className="text-lg text-zinc-900 antialiased  " >Home</NavLink>
          <NavLink  to="/allusers" className="text-lg text-zinc-900  antialiased " >All Users</NavLink>
          <NavLink  to="/adduser" className="text-lg text-zinc-900 antialiased  " >Add User</NavLink>
         </div>
     
    </div>
  )
}

export default Navbar
//npm start
// second termonal     npm run server
