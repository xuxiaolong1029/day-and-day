import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './index'
//合并项目组件中store的reducer
const reducer = combineReducers({
  index: indexReducer
})
//创建store，并引入中间件thunk进行异步操作的管理

//导出创建的store
// export default ()=>{
//   return createStore(reducer, applyMiddleware(thunk))
// }



export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
}
export const getClientStore = () => {
  const defaultState = window._context ? window._context : {};
  return createStore(reducer, defaultState, applyMiddleware(thunk));
}
