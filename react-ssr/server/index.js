
import express from 'express'
import { renderToString } from 'react-dom/server'
import React from 'react'
import { StaticRouter ,Route} from 'react-router-dom'; 
import { Provider } from 'react-redux';
import { matchRoutes } from 'react-router-config';
import Routes from '../Routes'
import { Helmet } from 'react-helmet';
import {getStore} from '../store/store'
import Header from '../component/Header'
const app = express()
const store = getStore()

// 开启static
app.use(express.static('public'));

// 匹配路由，所以需要用*
app.get('*', function (req, res) {

    // 匹配当前路由
    const matchedRoutes = matchRoutes(Routes, req.path)
    console.log(matchedRoutes)
    let promises = []
    matchedRoutes.forEach(item=>{
        let {load} = item.route.component
        if(load){
            const promise = new Promise((resolve, reject) => {
                load(store).then(resolve).catch(resolve);
            })
            promises.push(promise)
        }
    })


    Promise.all(promises).then(()=>{
        let context = {};
        // const html = render(store, routes, req, context);
    
        // if(context.action === 'REPLACE') {
        //   res.redirect(301, context.url);
        // } else if(context.NotFound) {
        //   res.status(404);
        //   res.send(html);
        // } else {
        //   res.send(html);
        // }
        const content = renderToString(
            <Provider store={store} >
                <StaticRouter location={req.path}  context={context}>
                <Header></Header>
                <div>
                    {
                        Routes.map(route => <Route {...route} />)
                    }
                </div>
                </StaticRouter>
            </Provider>
    
          );

          const helmet = Helmet.renderStatic()
       
       const html = `
        <html>
          <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          </head>
          <body>
            <div id="root">${content}</div>

            <script>
            window._context = ${JSON.stringify(store.getState())}
            
            </script>
            <script src="/index.js"></script>
          </body>
        </html>
       `
       res.send(html)
        // if(context.action === 'REPLACE') {
        //     // 跳转
        //   res.redirect(301, context.url);
        // } else {
        //   res.send(html);
        // }
    })

})
app.listen(9092, () => {
  console.log('success 端口9092')
})
