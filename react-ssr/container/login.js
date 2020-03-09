import React , {useState} from 'react';
import { Helmet } from 'react-helmet';
const Login = () => {
  return (
    <div>
        <Helmet>
          <title>开课吧登录</title>
          <meta name="description" content="这里是开课吧登录页"/>
        </Helmet>
        <h1>
            登录
        </h1>
        <div>
            <input type="text"/>
        </div>
    </div>
  )
}
export default Login
