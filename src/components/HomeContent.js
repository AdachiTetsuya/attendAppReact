import React, {useState, useEffect,useLayoutEffect} from 'react';
import axios from 'axios';

const HomeContent = () => {

    const [users, setUsers] = useState([{}]);
    const [click, setClick] = useState([]);


    const HOME_END_URL = 'http://localhost:8000/userList'

    useLayoutEffect(() => {
        const access_user_db = async () => {
            const response = await axios.get(HOME_END_URL);
            setUsers(response.data);
            console.log(response.data)
        };
        access_user_db();
    },[click]);

    var onlist = []
    var offlist = []
 
    for(var i in users){
        if(users[i].is_attend){
            onlist.push(<p key={i}>{users[i].username} {users[i].time}</p>);
        }else{
            offlist.push(<p key={i}>{users[i].username}</p>);
        }

    }

    // ボタンを押したら出席履歴をpost送信
    const API_BASE_URL = 'http://localhost:8000/createsubmit/'

    const onClickButton = async(bool) =>{
        const ATTEND_KEY = localStorage.getItem('attend_key')

        try {
            const createData = new FormData();
            
            createData.append("is_attend", bool);

            // API実行結果JSONをresに
            const res = await axios.post(
              API_BASE_URL,
              createData,
              {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Token ${ATTEND_KEY}`,
                },
              }
            );

            if(res.data){
                setClick((click)=>click+1);
            }
        }catch {
            console.log("error");
        }
    }

    return(
        <>
            <h1>今いる人</h1>
            <ul>
                {onlist}
            </ul>
            <h1>今いない人</h1>
            <ul>
                {offlist}
            </ul>
            <button onClick={()=> onClickButton(true)}>出席</button>
            <button onClick={()=> onClickButton(false)}>退席</button>
        </>
    )
}

export default HomeContent