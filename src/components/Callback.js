
import axios from 'axios';
import { Navigate } from 'react-router-dom';

// LINEログインが成功したリダイレクト先
function  Callback(){
    
    const TOKEN_END_URL = 'http://localhost:8000/dj-rest-auth/line/'
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

    // 認可codeを使ってtokenを取得しローカルストレージに保存
    axios.post(TOKEN_END_URL,{"code":params.code}).then(response=>{localStorage.setItem('attend_key',response.data.key)})
    
    return(
        <>
            
            <Navigate to='/home' />
        </>
    )
}

export default  Callback