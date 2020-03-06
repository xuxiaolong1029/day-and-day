import React from 'react';
import ReactDom from 'react-dom'

//客户端入口

import Index from '../container/index'

//ssr render 要用hydreate替换 注水
ReactDom.hydrate(
    <Index></Index>,
    document.getElementById('root')
)