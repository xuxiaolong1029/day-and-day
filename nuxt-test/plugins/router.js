// 默认路由重定向
export default ({ app,redirect,store }) => {
    app.router.beforeEach((to, from,next) => {
        console.log('我要去：'+to.path)
        next()
    })
}
