import React,{useState} from 'react';

//hooks组件
const Index =()=>{
    let [count,setCount] = useState(1)
    return(
        <div>
            <h1>开课吧 {count}</h1>
            <button onClick={()=>setCount(count+1)}>累加</button>
        </div>
    )
}
export default Index