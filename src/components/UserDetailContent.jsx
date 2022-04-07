import React from 'react'
import { useParams,Link } from 'react-router-dom'
import { useUserDetail } from "../hooks/useUserDetail"
import { RiCheckboxBlankFill,RiCheckboxBlankLine } from "react-icons/ri";
import { IconContext } from 'react-icons';

const UserDetail = () => {
    const { id } = useParams()
    let { userDetail } = useUserDetail(id); // userDetail は {username:'足立',...} の形でuser情報の連想配列である

    const isAttendFunction = (active) => {

        const result = (active) ? '出席中' : '退席中'
        return result
    }

    return (
        <div style={{width:'90%',margin:'0 auto'}}>
        <Link to="/home" style={{ textDecoration: 'none' }}>←戻る</Link>

        <h1 style={{ fontSize: '3rem',borderBottom:'1px solid #eee'}}>{userDetail && userDetail.username}</h1>
        <span style={{fontWeight:'bold',fontSize:'2rem'}}>{isAttendFunction(userDetail && userDetail.is_attend)}</span>
        <div style={{paddingTop:'1rem',fontSize:'1.5rem'}}>1週間の出席状況</div>

        <IconContext.Provider value={{ color: '#007bff', size: '40px' }}>
            {userDetail && userDetail.attendances.map((obj)=>{return obj === 0 ? <RiCheckboxBlankLine />:<RiCheckboxBlankFill />})}
        </IconContext.Provider>
        </div>
    )
}

export default UserDetail