import express from 'express';
import React from 'react'
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Routes from '../Routes';
const app = express()
app.use(express.static('public'))

app.get('*',function(req,res){
    let content = renderToString(
       <StaticRouter location={req.url}>
           {Routes}
       </StaticRouter>
    )
    let html = `
    <html>
        <head>
            <title>react-ssr</title>
        </head>
        <body>
            <div id='root'>${content}</div>
            <script src='/main.js'></script>  
        </body>
    </html>
    `
    res.send(html)
})

app.listen(9092,()=>{
    console.log('启动成功， 9092端口')
})