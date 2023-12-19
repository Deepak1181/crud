import axios from 'axios'

const API_URL="http://localhost:3005/userdata"

export const adduserdata = async(data) => {
try {
  return await axios.post(API_URL,data)
} catch (error) {
    console.log(`error while calling Api`, error.message)
}
}

export const getuserDetails=async()=>{
  try {
    return await axios.get(API_URL)
  } catch (error) {
    console.log("error when call api" , error.message)
  }

}


//npm start
// second termonal     npm run server
