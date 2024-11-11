import axios from 'axios';

export const login = async (credentials) => {
    const response = await axios.post('https://nbad-s62-15.onrender.com/api/login', credentials);
  return response.data;
};
