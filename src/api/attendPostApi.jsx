import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_ATTEND_API_ROOT;
const attendPostApiEnd = `${API_BASE_URL}/createsubmit/`;

export const attendPost = async (isAttend,token) => {
    const createData = new FormData();   
    createData.append("is_attend", isAttend);
    
    try {
        const response = await axios.post(attendPostApiEnd,createData,{
            headers: {
                "Content-Type": "application/json",
                Authorization: "Token " + token,
            },
        });
        return response.data
    } catch (e) {
        console.error(e);
    }
};