import axios from 'axios';

axios.defaults.baseURL = 'https://graph-pagerank.herokuapp.com/api';


export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
};


