import React, { useState } from 'react'
import { Button} from '@chakra-ui/react'
import  { adduserdata } from '../Api/api'
import { useNavigate } from 'react-router-dom'
const Adduser = () => {
    const navigate = useNavigate();
    const initialvalue={
      name:"",
      username:"",
      email:"",  
      phoneno:"",
      address:""    
    }
    const [user,setuser]= useState(initialvalue)
 
     const onValueChange=(e)=>{
       setuser({...user,[e.target.name]:e.target.value})
       //console.log( e.target.name,e.target.value)
       console.log(user)
    }


    const AdddataStore= async(e)=>{
      e.preventDefault()
      await adduserdata(user)
      navigate("/allusers")
    }
    return (
    <div>

<form
  className="shadow-xl w-64 rounded-lg m-auto flex flex-col items-center gap-4 p-8"
  onSubmit={AdddataStore}
>
  <h1 className="text-2xl font-bold mb-4">ADD USER DETAILS</h1>
  <div className="flex flex-col w-full">
    <label className="mb-2 font-semibold text-gray-700">Name</label>
    <input
      required
      className="shadow-sm border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1"
      placeholder="Enter name"
      name="name"
      onChange={(e) => onValueChange(e)}
    />
  </div>
  <div className="flex flex-col w-full">
    <label className="mb-2 font-semibold text-gray-700">Username</label>
    <input
      required
      className="shadow-sm border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1"
      placeholder="Enter username"
      name="username"
      onChange={(e) => onValueChange(e)}
    />
  </div>
  <div className="flex flex-col w-full">
    <label className="mb-2 font-semibold text-gray-700">Email</label>
    <input
      required
      className="shadow-sm border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1"
      placeholder="Enter email"
      name="email"
      onChange={(e) => onValueChange(e)}
    />
  </div>
  <div className="flex flex-col w-full">
    <label className="mb-2 font-semibold text-gray-700">Phone number</label>
    <input
      required
      className="shadow-sm border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1"
      placeholder="Enter phone number"
      name="phoneno"
      onChange={(e) => onValueChange(e)}
    />
  </div>
  <div className="flex flex-col w-full">
    <label className="mb-2 font-semibold text-gray-700">Address</label>
    <textarea
      required
      className="shadow-sm border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1"
      placeholder="Enter address"                                 
      name="address"
      onChange={(e) => onValueChange(e)}
    ></textarea>
  </div>
  <button
    type="submit"
    className="inline-block px-4 py-2 rounded-md font-bold text-white bg-indigo-500 hover:bg-indigo-700"
  >
    ADD USER
  </button>
</form>

    </div>
  )
}

export default Adduser



//npm start
// second terminal mei    npm run server
