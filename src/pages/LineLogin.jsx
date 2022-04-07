import React from 'react'

// LINEログインへのリンクを表示
const LineLogin = () => {
    const CALL_BACK_URL = process.env.REACT_APP_CALL_BACK_URL;

    const LINK = 'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1656757018&redirect_uri=' + CALL_BACK_URL + '&state=12345abcde&scope=profile%20openid&nonce=09876xyz'

    return(
        <div>
            <h1>LINEでログインします</h1>
            <a href={LINK}>LINEログイン</a>
        </div>
    )
}

export default LineLogin