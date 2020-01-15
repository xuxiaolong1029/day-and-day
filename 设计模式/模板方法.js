/*
    模板⽅方法模式在⼀一个⽅方法中定义⼀一个算法的⻣骨架，⽽而将⼀一些步骤的实现延迟到⼦子类中。模板⽅方法
    使得⼦子类可以在不不改变算法结构的情况下，重新定义算法中某些步骤的具体实现
    场景：，vue中的slot，react中的children
*/
class Person {
    constructor(){}
    render(){
        //<div><div name="joe">{this.props.children}</div></div>
    }
}
class Stage {
    constructor(){}
    render(){
        //<Parent><div>child</div></Parent>
    }
}
