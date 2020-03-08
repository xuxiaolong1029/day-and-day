import React from 'react'
import ReactDom from 'react-dom'

import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import {getClientStore} from '../store/store'
import Routes from '../Routes'
import Header from '../component/Header'

let store = getClientStore()
const App = () => {
    return <Provider store={store}>
        <BrowserRouter>
            <Header></Header>
            <div>
                {
                    Routes.map(route => <Route {...route} />)
                }
            </div>

            {/* {Routes} */}
        </BrowserRouter>
    </Provider>


}
ReactDom.hydrate(<App />, document.getElementById('root'))