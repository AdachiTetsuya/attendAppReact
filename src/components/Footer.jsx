import Button from 'react-bootstrap/Button';
import React, {useState} from 'react'
import { attendPost } from '../api/attendPostApi';
import { UserList } from './UserList';

const Footer = () => {
    const [count, setCount] = useState(0);

    const onClickButton = async(bool) =>{
        const ATTEND_KEY = localStorage.getItem('attend_key')

        const data = attendPost(bool,ATTEND_KEY);
        if(data){
            setCount((count)=>count+1)
        }
    }

    return(
        <>
            <UserList num = {count} style={{width:'90%',margin:'0 auto'}}/>
            <Button variant="btn btn-primary" onClick={()=> onClickButton(true)} style={{ position: 'fixed',bottom:'0px',fontSize:'3rem',width:'50%' }}>出席</Button>
            <Button variant="btn btn-secondary" onClick={()=> onClickButton(false)} style={{ position: 'fixed',bottom:'0px',left:'50%',fontSize:'3rem',width:'50%'}}>退席</Button>
            
        </>
    )
}

export default Footer