import {createStore,applyMiddleware,combinReducers} from 'redux';
import thunk from 'redux-thunk' ;//支持异步的中间件

import indexReducer from '/index';

const reducer = combinReducers({
    index:indexReducer
})

export default ()=>{
    const store = createStore(reducer,applyMiddleware(thunk));
    return store
}