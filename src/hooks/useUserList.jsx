
import { useState,useEffect} from "react";
import { getUserList } from "../api/userListApi";

export const useUserList = (num) => {
    const [userList,setUserList] = useState();

    useEffect(()=>{
        getUserList().then((userList) => {  // userList はuser情報の配列
            setUserList(userList)
        });
    },[num]);

    return{
        userList
    };
};