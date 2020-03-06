import {observe} from './index'
import { arrayMethods, observerArray } from './array';
import Dep from './dep'
export function defineReactive(data,key,value){ // 定义响应式的数据变化
    // vue 不支持ie8 及 ie8 以下的浏览器  
    // 如果value 依旧是一个对象的话 需要深度观察 {school:{name:'zf,age:10}}
    observe(value); // 递归观察  {} arr [1,2,3]
    // 相同的属性用的是相同的dep
    let dep = new Dep(); // dep里可以收集依赖 收集的是watcher 每一个属性都增加一个dep实例
    Object.defineProperty(data,key,{
        get(){ //只要对这个属性进行了取值操作 ，就会将当前的watcher 存入进去
            if(Dep.target){ // 这次有值用的是渲染watcher
                // 我们希望存入的watcher 不能重复 ，如果重复会造成更新时多次渲染
               dep.depend(); // 他像让dep 中可以存watcher，我还希望让这个watcher中也存放dep，实现一个多对多的关系
            }
            return value;
        },
        set(newValue){
            if(newValue === value) return;
            observe(newValue); // 如果你设置的值是一个对象的话 应该在进行监控这个新增的对象
            console.log('设置数据')
            value = newValue;
            dep.notify();
        }
    })
}
class Observer { // es6类 
    constructor(data){ // data 就是我们刚才定义的vm._data
        // 将用户的数据使用defineProperty重新定义 
        if(Array.isArray(data)){ // 我需要重写 push 方法等
            // 只能拦截数组的方法 ，数组里的每一项 还需要去观测一下
            data.__proto__ = arrayMethods; //让数组 通过链来查找我们自己编写的原型
            observerArray(data); // 观测数据中的每一项
        }else{
            this.walk(data);
        }
    }
    walk(data){ 
        let keys = Object.keys(data);
        for(let i = 0 ; i < keys.length;i++){
            let key = keys[i]; // 用户传入的key
            let value = data[keys[i]]; // 用户传入的值

            // 对每一个属性都进行重新用defineProperty
            defineReactive(data,key,value);
        }
    }
}
export default Observer

// 新一期架构课 开课了 大家可以报名联系 我们客服老师


