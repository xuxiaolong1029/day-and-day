import React from 'react';
import { render } from 'react-dom';

//函数类型的组件
export function Welcomel(props){
    return(
    <div>函数类型的组件,{props.name}</div>
    )
}

//基于类的组件
export class Welcome2 extends React.Component{
    render(){
        return(
            <div>基于类的组件,{this.props.name}
                <Welcomel name='Welcome2'></Welcomel>
            </div>
            
        )
    }
}