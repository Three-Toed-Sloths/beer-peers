import axios from 'axios';

export default {
  // GET ALL USERS
  getUsers: () => axios.get('/api/users'),
  // GET USER BY ID
  getUser: id => axios.get(`/api/users/${id}`),
  // UPDATE USER BY ID
  updateUser: (id, data) => axios.put(`/api/users/${id}`, data),
  // DELETE USER BY ID
  deleteUser: id => axios.delete(`/api/users/${id}`),
  // POST NEW USER
  saveUser: userData => axios.post('/api/users', userData),
};
