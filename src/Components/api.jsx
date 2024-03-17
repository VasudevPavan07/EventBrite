import axios from 'axios';

export async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error for handling in components
    }
}

export async function postData(url, data) {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error; // Re-throw the error for handling in components
    }
}
export  default { fetchData, postData };
