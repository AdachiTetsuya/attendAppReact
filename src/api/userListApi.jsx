import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_ATTEND_API_ROOT;
const userListApiEnd = `${API_BASE_URL}/userList`;

export const getUserList = async () => {
    try {
        const response = await axios.get(userListApiEnd)
        return response.data
    } catch (e) {
        console.error(e);
    }
};