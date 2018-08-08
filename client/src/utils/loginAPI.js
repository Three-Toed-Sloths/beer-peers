import axios from 'axios';

export default {
    // CHECK IF USERNAME EXISTS
    checkUsername: username => axios.get(`/api/login/check/${username}`),
    // CHECK LOGIN CREDENTIALS
    checkLogin: (username, password) => axios.get(`/api/login/${username}/${password}`)
};