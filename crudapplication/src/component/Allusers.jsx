import React, { useEffect, useState } from "react";
import { getuserDetails } from "../Api/api";
import { Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Allusers = () => {
  const [showdata, setShowData] = useState([]);

  useEffect(() => {
    getuser();
  }, []);

  const getuser = async () => {
    try {
      let response = await getuserDetails();
      console.log(response.data, "response");
      setShowData(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const deleteUser = async (id) => {
    try {
     
      await axios.delete(`http://localhost:3005/userdata/${id}`);

     
      getuser();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  const navigate = useNavigate();

  const Transferm = (id) => {
    navigate(`/edituser/${id}`);
  };
  return (
    <div>
      <h1>All users s</h1>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 py-2 px-4">SNO</th>
            <th className="border border-gray-300 py-2 px-4">Name</th>
            <th className="border border-gray-300 py-2 px-4">Username</th>
            <th className="border border-gray-300 py-2 px-4">Email</th>
            <th className="border border-gray-300 py-2 px-4">Phone</th>
            <th className="border border-gray-300 py-2 px-4">Address</th>
            <th className="border border-gray-300 py-2 px-4">Edit</th>
            <th className="border border-gray-300 py-2 px-4">Delete</th>
          </tr>
        </thead>
        <tbody>
          {showdata.map((el) => (
            <tr key={el.id} className="border-t border-gray-300">
              <td className="border border-gray-300 py-2 px-4">{el.id}.</td>
              <td className="border border-gray-300 py-2 px-4">{el.name}</td>
              <td className="border border-gray-300 py-2 px-4">{el.username}</td>
              <td className="border border-gray-300 py-2 px-4">{el.email}</td>
              <td className="border border-gray-300 py-2 px-4">{el.phoneno}</td>
              <td className="border border-gray-300 py-2 px-4">{el.address}</td>
              <td className="border border-gray-300 py-2 px-4">
                <Button
                  className="p-2 rounded-md bg-indigo-500 hover:bg-indigo-700 text-white"
                  onClick={() => Transferm(el.id)}
                >
                  Edit
                </Button>
              </td>
              <td className="border border-gray-300 py-2 px-4">
                <Button
                  className="p-2 rounded-md bg-red-500 hover:bg-red-700 text-white"
                  onClick={() => deleteUser(el.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allusers;



//npm start
// second termonal     npm run server
