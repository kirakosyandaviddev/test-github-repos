import axios from 'axios';

const baseUrl = 'https://api.github.com/';

const instance = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
  });

const Api = {
    searchRepositories: (query, pageIndex = 1) => {
        return instance({
            method: 'get',
            url: `search/repositories?q=${query} in:name&per_page=10&page=${pageIndex}`
        })
    },
    getRepository: (login, repoName) => {
        return instance({
            method: 'get',
            url: `repos/${login}/${repoName}`
        })
    },
    getRepositoryById: (repoId) => {
        return instance({
            method: 'get',
            url: `repositories/${repoId}`
        })
    } 
}

export default Api;