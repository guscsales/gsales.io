import axios from 'axios';

const http = (url) => axios.get(url).then((res) => res.data);

export default http;
