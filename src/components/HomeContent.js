import React, {useState, useEffect,useLayoutEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';


const HomeContent = (props) => {

    const [users, setUsers] = useState([{}]);

    const HOME_END_URL = 'http://localhost:8000/userList'

    useEffect(() => {
        const access_user_db = async () => {
            const response = await axios.get(HOME_END_URL);
            setUsers(response.data);
        };
        access_user_db();
    },[props.attend]);

    var onlist = []
    var offlist = []
 
    for(var i in users){
        if(users[i].is_attend){
            onlist.push(<Link to={`/staff/${users[i].id}`} key={i} style={{ textDecoration: 'none' }}><div key={i} style={{ fontSize: '1.7rem' }}>{users[i].username}<span key={i} style={{ fontSize: '1.0rem' }}>   {users[i].time}</span></div></Link>);
        }else{
            offlist.push(<Link to={`/staff/${users[i].id}`} key={i} style={{ textDecoration: 'none' }}><div key={i} style={{ fontSize: '1.5rem' }}>{users[i].username}</div></Link>);
        }

    }

    return(
        <>
            {onlist.length === 0 ? <h2 style={{ backgroundColor: '#eee',margin:'0' }}>誰もいません</h2> : <h2 style={{ backgroundColor: '#eee',margin:'0' }}>今いる人</h2>}
                <Card style={{ width:'100%'}}>
                    <ListGroup variant="flush">
                    {onlist.map((obj)=>{ return <ListGroup.Item key={obj} >{obj}</ListGroup.Item> })}
                    </ListGroup>
                </Card>
            <h2 style={{ marginTop: '1rem',backgroundColor: '#eee',marginBottom:'0' }}>今いない人</h2>
                <Card style={{ width:'100%'}}>
                    <ListGroup variant="flush">
                    {offlist.map((obj)=>{return <ListGroup.Item key={obj}>{obj}</ListGroup.Item>})}
                    </ListGroup>
                </Card>
           

        </>
    )
}

export default HomeContent