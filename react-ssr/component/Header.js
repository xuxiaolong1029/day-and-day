import React from 'react';
import {Link} from 'react-router-dom'

export default ()=>{
    return <div>
      <Link to="/">首页</Link> || 
      <Link to="/login">登录</Link> 
    </div>
}