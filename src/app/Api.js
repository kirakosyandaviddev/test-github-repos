import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 1000,
  });

const Api = {
    getRepository: (query, pageIndex = 1) => {
        return instance({
            method: 'get',
            url: `repositories?q=${query} in:name&per_page=10&page=${pageIndex}`
        })
    }
}

export default Api;