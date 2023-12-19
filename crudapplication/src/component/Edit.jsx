import React, { useEffect, useState } from 'react';
import { Button, Input } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Edituser = () => {
  const [userData, setUserData] = useState({
    name: '',
    username: '',
    email: '',
    phoneno: '',
    address: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const getUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:3005/userdata/${id}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const onValueChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const updateUserData = async () => {
    try {
      await axios.patch(`http://localhost:3005/userdata/${id}`, userData);
    
       navigate("/allusers");
    
      // console.log()
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  useEffect(() => {
    getUserData();
    
  }, []);

  return (
    <div>
      <div className="shadow-xl w-64 rounded-lg m-auto">
        <h1 className="underline">Edit Users Details</h1>
        <div className="flex justify-center m-auto flex-col gap-5 p-5 w-64">
          <Input
            className="p-2 shadow-2xl"
            placeholder="Name"
            name="name"
            onChange={(e) => onValueChange(e)}
            value={userData.name}
          />
          <Input
            className="p-2 shadow-2xl"
            placeholder="Username"
            name="username"
            onChange={(e) => onValueChange(e)}
            value={userData.username}
          />
          <Input
            className="p-2 shadow-2xl"
            placeholder="Email"
            name="email"
            onChange={(e) => onValueChange(e)}
            value={userData.email}
          />
          <Input
            className="p-2 shadow-2xl"
            placeholder="Phone no"
            name="phoneno"
            onChange={(e) => onValueChange(e)}
            value={userData.phoneno}
          />
          <Input
            className="p-2 shadow-2xl"
            placeholder="Address"
            name="address"
            onChange={(e) => onValueChange(e)}
            value={userData.address}
          />
        </div>
      </div>
      <Button
        className="px-5 rounded-md mt-2 bg-indigo-500 hover:bg-indigo-700 text-slate-200"
        colorScheme="blue"
        onClick={() => updateUserData()}
      >
        Edit
      </Button>
      
    </div>
  );
};

export default Edituser;

//npm start
// second termonal     npm run server
