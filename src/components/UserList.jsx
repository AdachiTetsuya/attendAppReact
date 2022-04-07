
import { useUserList } from "../hooks/useUserList"
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';



export const UserList = (props)=> {
    let { userList } = useUserList(props.num); // userList は [{},{}] の形でuser情報の連想配列が入った配列である

    var onlist = []
    var offlist = []
 
    for(var i in userList){
        if(userList[i].is_attend){
            onlist.push(<Link to={`/user_detail/${userList[i].id}`} key={i} style={{ textDecoration: 'none' }}><div key={i} style={{ fontSize: '1.7rem' }}>{userList[i].username}<span key={i} style={{ fontSize: '1.0rem' }}>   {userList[i].time}</span></div></Link>);
        }else{
            offlist.push(<Link to={`/user_detail/${userList[i].id}`} key={i} style={{ textDecoration: 'none' }}><div key={i} style={{ fontSize: '1.5rem' }}>{userList[i].username}</div></Link>);
        }

    }

    return(
        <>
            <div>
                {onlist.length === 0 ? <h2 style={{ backgroundColor: '#eee',margin:'0',paddingLeft:'1rem' }}>誰もいません</h2> : <h2 style={{ backgroundColor: '#eee',margin:'0',paddingLeft:'1rem' }}>今いる人</h2>}
                    <Card style={{ width:'100%'}}>
                        <ListGroup variant="flush">
                        {onlist.map((obj)=>{ return <ListGroup.Item >{obj}</ListGroup.Item> })}
                        </ListGroup>
                    </Card>
                <h2 style={{ marginTop: '1rem',backgroundColor: '#eee',marginBottom:'0',paddingLeft:'1rem' }}>今いない人</h2>
                    <Card style={{ width:'100%'}}>
                        <ListGroup variant="flush">
                        {offlist.map((obj)=>{return <ListGroup.Item >{obj}</ListGroup.Item>})}
                        </ListGroup>
                    </Card>
            </div>
        </>
    )
}