class Promise{
    constructor(executor){
        //初始化state为等待态
        this.state = 'pending';
        //成功的值
        this.value = undefined;
        //失败的原因
        this.reason = undefined;
        //成功存放的数组
        this.onResolvedCallbacks = [];
        //失败存放的数组
        this.onRejectedCallbacks = [];
        //成功
        let resolve = value =>{
            //state改变，resolve调用就会失败
            if(this.state === 'pending'){
                // resolve调用后，state转化为成功态
                this.state = 'fulfilled';
                //储存成功的值
                this.value = value;
                // 一旦resolve执行，调用成功数组的函数
                this.onResolvedCallbacks.forEach(fn=>fn());
            }
        };
        //失败
        let reject = reason =>{
            //state改变，reject调用就会失败
            if(this.state==='pending'){
                //reject调用后，state转化为失败态
                this.state = 'rejected';
                //储存失败的原因
                this.reason = reason;
                // 一旦reject执行，调用失败数组的函数
                this.onRejectedCallbacks.forEach(fn=>fn());
            }
        };
        //如果executor执行报错，直接执行reject
        try {
            executor(resolve,reject)
        }catch (err) {
            reject(err)
        }
    }
    then(onFulfilled,onRejected){
        //onFulfilled 如果不是函数，就忽略onFulfilled，直接返回value
        onFulfilled = typeof onFulfilled==='function'?onFulfilled:value => value;
        // onRejected如果不是函数，就忽略onRejected，直接扔出错误
        onRejected = typeof onRejected === 'function'?onRejected:err=>{throw err};
        //声明返回promise2
        let promise2 = new Promise((resolve,reject)=>{
            //状态为fulfilled，执行onFulfilled，传入成功的值
            if(this.state === 'fulfilled'){
                //异步
                setTimeout(()=>{
                    try{
                        let x = onFulfilled(this.value);
                        //resolvePromise函数，处理自己return的promise和默认的promise2的关系
                        resolvePromise(promise2, x, resolve, reject);
                    }catch (e) {
                        reject(e)
                    }
                },0)
            }
            //状态为rejected,执行onRejected,传入失败的原因
            if(this.state === 'rejected'){
                //异步
                setTimeout(()=>{
                    try{
                        let x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    }catch (e) {
                        reject(e)
                    }
                },0)
            }
            //当状态state为pending时
            if(this.state === 'pending'){
                //onFulfilled传入到成功数组
                this.onResolvedCallbacks.push(()=>{
                    //异步
                    setTimeout(()=>{
                        try{
                            let x = onFulfilled(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        }catch (e) {
                            reject(e)
                        }
                    },0)
                });
                //onRejected传入到失败数组
                this.onRejectedCallbacks.push(()=>{
                    //异步
                    setTimeout(()=>{
                        try{
                            let x = onRejected(this.reason);
                            resolvePromise(promise2, x, resolve, reject);
                        }catch (e) {
                            reject(e)
                        }
                    },0)
                });
            }
        });
        return promise2;
    }
}
function resolvePromise(promise2, x, resolve, reject) {
    //循环引用报错
    if( x === promise2){
        //reject报错
        return reject(new TypeError('Chaining cycle detected for promise'));
    }
    //防止多次调用
    let called;
    // x不是null 且x是对象或者函数
    if(x!==null && (typeof x==='object')|| typeof x==='function'){
        try {
            // A+规定，声明then = x的then方法
            let then = x.then;
            //如果then是函数，就默认是promise了
            if(typeof then==='function'){
                //就让then执行 第一个参数是this 后面是成功的回调和失败的回调
                then.call(x,y =>{
                    if(called) return false;
                    called = true;
                    //resolve的结果依旧是promise 那就继续解析
                    resolvePromise(promise2, x, resolve, reject);
                },err =>{
                    //成功和失败只能调用一个
                    if(called) return false;
                    called = true;
                    reject(err);// 失败了就失败了
                })
            }else{
                resolve(x); //直接成功即可
            }
        }catch (e) {
            //也属于失败
            if(called) return false;
            called = true;
            //取then出错了那就不要在继续执行了
            reject(e);
        }
    }else{
        resolve(x);
    }
}
//resolve方法
Promise.resolve = function (val) {
    return new Promise((resolve,reject)=>{
       resolve(val)
    });
};
// reject方法
Promise.reject = function (val) {
    return new Promise((resolve,reject)=>{
        reject(val)
    });
};
// race 方法
Promise.race = function (promises) {
    return new Promise((resolve,reject)=>{
        for(let i=0;i<promises.length;i++){
            promises[i].then(resolve,reject)
        }
    });
};
//all方法(获取所有的promise，都执行then，把结果放到数组，一起返回)
Promise.all = function (promises) {
    let arr = [];
    let i = 0;
    function processData(index,data){
        arr[index] = data;
        i++;
        if(i === promises.length){
            resolve(arr);
        }
    }
    return new Promise((resolve,reject)=>{
        for(let i=0;i<promises.length;i++){
            promises[i].then(data=>{
                processData(i,data);
            },reject);
        }
    })
};
// 目前是通过他测试 他会测试一个对象
// 语法糖
Promise.defer = Promise.deferred = function () {
    let dfd = {};
    dfd.promise = new Promise((resolve,reject)=>{
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
};
module.exports = Promise;
