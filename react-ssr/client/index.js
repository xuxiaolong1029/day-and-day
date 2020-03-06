import React from 'react';
import ReactDom from 'react-dom'
import {BrowserRouter} from 'react-router-dom';
import Routes from '../Routes'
//客户端入口

import Index from '../container/index'

//ssr render 要用hydreate替换 注水
ReactDom.hydrate(
    <BrowserRouter>
        {Routes}
    </BrowserRouter>,
    document.getElementById('root')
)