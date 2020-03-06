import express from 'express';
import React from 'react'
import {renderToString} from 'react-dom/server'
import Index from '../container/index'
const app = express()
app.use(express.static('public'))

app.get('/',function(req,res){
    let content = renderToString(
        <Index></Index>
    )
    let html = `
    <html>
        <head>react-ssr</head>
        <body>
            <div id='root'>${content}</div>
        </body>
    </html>
    `
    res.send(html)
})

app.listen(9092,()=>{
    console.log('启动成功， 9092端口')
})