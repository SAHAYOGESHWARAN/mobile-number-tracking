import axios from 'axios';

const API_URL = '/api/tracking/';

export const trackMobileNumber = async (mobileNumber, location ) => {
    try {
        const response = await axios.post(`${API_URL}track`, { mobileNumber, location });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};