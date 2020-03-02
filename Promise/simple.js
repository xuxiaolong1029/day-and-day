const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
class Promise{
    constructor(fn){
        //当前状态
        this.state = PENDING;
        //终值
        this.value = null;
        //拒绝原因
        this.reason = null;
        //成功状态回调对列
        this.onFulfilledCallbacks =[];
        //拒绝状态回调对列
        this.onRejectedCallBacks = [];

        //成功态回调
        const resolve = value =>{
            // 使用macro-task机制(setTimeout),确保onFulfilled异步执行,且在 then 方法被调用的那一轮事件循环之后的新执行栈中执行。
            setTimeout(() =>{
                if(this.state===PENDING){
                    //将pending状态变成fulfilled态，保证调用次数不超过一次
                    this.state = FULFILLED;
                    //终值
                    this.value = value;
                    this.onFulfilledCallbacks.map(cb=>{
                        this.value = cb(this.value);
                    })
                }
            });
        };
        const reject  = reason => {
            // 使用macro-task机制(setTimeout),确保onFulfilled异步执行,且在 then 方法被调用的那一轮事件循环之后的新执行栈中执行。
            setTimeout(() =>{
                if(this.state===PENDING){
                    //将pending状态变成fulfilled态，保证调用次数不超过一次
                    this.state = REJECTED;
                    //终值
                    this.reason = reason;
                    this.onRejectedCallBacks.map(cb=>{
                        this.reason = cb(this.reason);
                    })
                }
            });
        };
        try{
            fn(resolve,reject);
        }catch(e){
            reject(e);
        }
    }
    then(onFulfilled,onRejected){
        typeof onFulfilled==='function'&&this.onFulfilledCallbacks.push(onFulfilled);
        typeof onRejected==='function'&&this.onRejectedCallbacks.push(onRejected);
         // 返回this支持then 方法可以被同一个 promise 调用多次
         return this;
    }
}