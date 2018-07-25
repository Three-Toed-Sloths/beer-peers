import axios from 'axios';

export default {
    checkUsername: username => axios.get(`/api/login/${username}`),
};