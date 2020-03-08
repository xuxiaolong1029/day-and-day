import React , {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { getIndexList } from '../store/index'


const Index = (props) => {
  console.log(props)
  let [count, setCount] = useState(1)
  // useEffect(()=>{
  //   if(!props.list.length){
  //     props.getIndexList()
  //   }
  // },[])
  return (
    <div>

        <Helmet>
          <title>开课吧首页</title>
          <meta name="description" content="这里是开课吧 前端 java"/>
        </Helmet>

        <h1>
            开课吧 {count}
        </h1>
        <div>
            <button onClick={()=>setCount(count+1)}>累加</button>
            {/* <button onClick={()=>props.getIndexList()} > 加载</button> */}
        </div>
        
        <ul>
          {props.list.map( item => <li key={item.id}> {item.name}</li>)}
        </ul>
    </div>
  )
}

Index.load = (store)=>{
  return store.dispatch(getIndexList())
}

export default connect(
  state=>({ list: state.index.list}),
  {
    getIndexList
  }
)(Index)
