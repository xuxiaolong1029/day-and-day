export default ({ $axios, app, store, redirect, req }) => {
    //onRequest 为请求拦截器帮助方法
    $axios.onRequest(config =>{
        if(!process.server)
          config.header.token='jilei'
    })
}