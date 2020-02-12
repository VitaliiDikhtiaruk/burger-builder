import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-e24da.firebaseio.com/'
});

export default instance;
