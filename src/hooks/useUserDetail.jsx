import { useState,useEffect} from "react";
import { getUserDetail } from "../api/userDetailApi";

export const useUserDetail = (id) => {
    const [userDetail,setUserDetail] = useState();

    useEffect(()=>{
        getUserDetail(id).then((userDetail) => {  // userDetail はuser情報の配列
            setUserDetail(userDetail)
        });
    },[]);

    return{
        userDetail
    };
};