import Button from 'react-bootstrap/Button';
import HomeContent from './HomeContent';
import React , {useState, useEffect,useLayoutEffect} from 'react'
import axios from 'axios';


function Footer(){
    const [num, setNum] = useState(0);

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
                setNum((num)=>num+1)
            }
        }catch {
            console.log("error");
        }
    }

    return(
        <>
            <HomeContent attend = {num} />
            <Button variant="btn btn-primary" onClick={()=> onClickButton(true)} style={{ position: 'fixed',bottom:'0px',fontSize:'3rem',width:'50%' }}>出席</Button>
            <Button variant="btn btn-secondary" onClick={()=> onClickButton(false)} style={{ position: 'fixed',bottom:'0px',left:'50%',fontSize:'3rem',width:'50%'}}>退席</Button>
            
        </>
    )
}

export default Footer