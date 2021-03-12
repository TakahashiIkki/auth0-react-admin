import { fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const fetchJson = async (url, options = {}) => {
    const username = localStorage.getItem('username');
    if (username) {
        options.user = {
            authenticated: true,
            token: `Bearer ${username}`
        };
    }

    return fetchUtils.fetchJson(url, options);
}

export default jsonServerProvider('https://jsonplaceholder.typicode.com', fetchJson);