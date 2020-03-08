let express = require('express')
let app = express()


app.get('/course/list',(req,res)=>{
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    res.json({
        code:0,
        list:[
            { name:'web全栈架构师', id:1},
            { name:'js高级课', id:2},
            { name:'web小白课', id:3},
            { name:'java架构师', id:4},
        ]    
    })
})

app.listen('9090',()=>{
    console.log('mock成功')
})