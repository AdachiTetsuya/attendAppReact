
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const API_BASE_URL = process.env.REACT_APP_ATTEND_API_ROOT;
const TOKEN_END_URL = `${API_BASE_URL}/dj-rest-auth/line/`;

// LINEログインが成功したリダイレクト先
const Callback = () => {
    
    //?を除去
    let urlParamStr = window.location.search.substring(1)

    let params = {}

    //urlパラメータをオブジェクトにまとめる
    urlParamStr.split('&').forEach( param => {
        const temp = param.split('=')
        //pramsオブジェクトにパラメータを追加
        params = {
            ...params,
            [temp[0]]: temp[1]
        }
    })

    console.log(params.code)

    // 認可codeを使ってtokenを取得しローカルストレージに保存
    axios.post(TOKEN_END_URL,{"code":params.code}).then(response=>{localStorage.setItem('attend_key',response.data.key)})
    
    return(
        <>
            
            <Navigate to='/home' />
        </>
    )
}

export default  Callback