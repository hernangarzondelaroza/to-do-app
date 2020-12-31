import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://to-do-5ce1b-default-rtdb.firebaseio.com/'
})

export default instance;
