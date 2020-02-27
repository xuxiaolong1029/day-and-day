import React,{Component} from 'react';

class Clock extends Component{
    //状态初始化一般放在构造器中
    constructor(props){
        super(props);
        this.state = {
            date:new Date().toLocaleTimeString(),
            count:1,
            goods:[
                {id:1,text:'web全栈'},
                {id:2,text:'python全栈'}
            ]
        }
    }

    componentDidMount(){
        this.timer=setInterval(()=>{
            this.setState(prevState=> ({
                date:new Date().toLocaleTimeString(),
                count:prevState.count+1,
            }//, console.log(prevState)
            ));
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return(
            <div>
                <h1>{this.state.date} {this.state.count}</h1>
                {this.props.title?<p>{this.props.title}</p>:<p>无title</p>}
                {
                    this.state.goods.map(item=>
                        <li key={item.id}>{item.text}</li>
                    )
                }
                {/*  */}
            </div>
        )
    }
}
export default Clock