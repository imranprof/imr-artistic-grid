
import axios from './axios';

export const login = async (formData)=>{
  const res = await axios.post('/api/login/', formData);
  return res.data;
}

export const signup = async (formData)=>{
  const rest = await axios.post('/api/signup/', formData);
  return rest.data;
};

export const logout = async ()=>{
  const res = await axios.post('/api/logout/');
  console.log(res.data)
  return res.data;
};

export const getCurrentUser = async ()=>{
  const res = await axios.get('/api/user/me');
  return res.data;
};