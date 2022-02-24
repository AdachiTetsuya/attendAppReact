import React from 'react'

// LINEログインへのリンクを表示
function LineLogin(){

    return(
        <div>
            <h1>LINEでログインします</h1>
            <a href="https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656757018&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback%2F&state=12345abcde&scope=profile%20openid&nonce=09876xyz">LINEログイン</a>
        </div>
    )
}

export default LineLogin