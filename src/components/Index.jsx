
import { Navigate } from 'react-router-dom';


const Index = () => {
    const ATTEND_KEY = localStorage.getItem('attend_key')
    
    return(
        <>
            {ATTEND_KEY ? (
                <Navigate to='/home' />
            ):(
                <Navigate to='/login' />
            )}
        </>
    )
}

export default  Index