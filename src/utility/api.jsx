import axios from "axios";
const getRandomUser = async () => {
  try {
    const response = await axios.get('https://randomuser.me/api/');  
    return response.data;
   
  } catch (error) {
    console.error('Error fetching random user:', error);
    throw error

  }}


export default getRandomUser;