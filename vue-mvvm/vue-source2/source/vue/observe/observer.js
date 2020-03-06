import {observe} from './index'
export function defineReactive(data,key,value){ // 定义响应式的数据变化
    // vue 不支持ie8 及 ie8 以下的浏览器  
    // 如果value 依旧是一个对象的话 需要深度观察 {school:{name:'zf,age:10}}
    observe(value); // 递归观察
    Object.defineProperty(data,key,{
        get(){
            console.log('获取数据')
            return value;
        },
        set(newValue){
            if(newValue === value) return;
            console.log('设置数据')
            value = newValue
        }
    })
}
class Observer {
    constructor(data){ // data 就是我们刚才定义的vm._data
        // 将用户的数据使用defineProperty重新定义 
        this.walk(data);
    }
    walk(data){ 
        let keys = Object.keys(data);
        for(let i = 0 ; i < keys.length;i++){
            let key = keys[i]; // 用户传入的key
            let value = data[keys[i]]; // 用户传入的值
            defineReactive(data,key,value);
        }
    }
}
export default Observer