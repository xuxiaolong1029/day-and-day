/*
   装饰者模式
   定义：装饰者模式能够在不改变对象自身的基础上，在运行程序期间给对象动态地添加职责。
   使用场景：类似于拦截器，添加对象的前置和后置事件。
   react的⾼高阶组件, 或者react-redux中的@connect 或者⾃自⼰己定义⼀一些⾼高阶组件

   其实Vue中的v-input，v-checkbox也可以认为是装饰器器模式， 对原⽣生的input和checkbox做⼀一层装饰
*/
import React from 'react';
const withLog = Component =>{
    //类组件
    class NewComponent extends React.Component{
        componentWillMount() {
            console.time('ComponentRender');
            console.log('准备完毕了')
        }
        render() {
           // return <Component {...this.props}></Component>
        }
        componentDidMount() {
            console.time('ComponentRender');
            console.log('渲染完毕了')
        }
    }
    return NewComponent
}
export {withLog}
//

//@withLog
//class xxx
