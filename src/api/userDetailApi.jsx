import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_ATTEND_API_ROOT;

export const getUserDetail = async (id) => {
    const userDetailApiEnd = `${API_BASE_URL}/staff/${id}`;
    try {
        const response = await axios.get(userDetailApiEnd);
        return response.data
    } catch (e) {
        console.error(e);
    }
};