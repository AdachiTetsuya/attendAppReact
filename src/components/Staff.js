import React , {useState, useEffect,useLayoutEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios';
import  Header from './Header';
import { RiCheckboxBlankFill,RiCheckboxBlankLine } from "react-icons/ri";
import { IconContext } from 'react-icons';
import  Footer from './Footer';


function Staff() {
    // idを取得します。
    const { id } = useParams()
    const [staff, setStaff] = useState([{}])

    const STAFF_URL = `http://localhost:8000/staff/${id}`

    useLayoutEffect(() => {
        const access_user_detail = async () => {
            const response = await axios.get(STAFF_URL);
            setStaff(response.data);
        };
        access_user_detail();
    },[]);

    const isAttendFunction = (active) => {

        const result = (active) ? '出席中' : '退席中'
        return result
    }

    return (
        <>
        <Header/>
        <Link to="/home">←戻る</Link>
        <h1>{staff.username}</h1>
        <span>{isAttendFunction(staff.is_attend)}</span>
        <p>1週間の出席履歴</p>
        <IconContext.Provider value={{ color: '#007bff', size: '40px' }}>
            {staff.attendances && staff.attendances.map((obj)=>{return obj === 0 ? <RiCheckboxBlankLine />:<RiCheckboxBlankFill />})}
        </IconContext.Provider>
        <Footer />
        </>
    )
}

export default Staff