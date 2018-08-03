import axios from 'axios';

export default {
    checkUsername: username => axios.get(`/api/login/check/${username}`),
    checkLogin: (username, password) => axios.get(`/api/login/${username}/${password}`)
};