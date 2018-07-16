import axios from 'axios';

export default {
  // GET ALL USERS
  getUsers: () => axios.get('/api/users'),
  // GET USER BY ID
  getUser: id => axios.get(`/api/users/${id}`),
  // DELETE USER BY ID
  deleteUser: id => axios.delete(`/api/users/${id}`),
  // POST NEW USER
  saveUser: userData => axios.post('/api/users', userData)
};
