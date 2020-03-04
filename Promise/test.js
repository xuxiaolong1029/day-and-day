const pending = 'pending';
const fulfilled = 'fulfilled';
const rejected = 'rejected';

class promise{
    constructor(fn){
        this.state = pending;

        this.value = null;
        this.reason = null;

        this.onFulfilledCb = [];
        this.onRejectedCb = [];

        const resolve = value =>{
            setTimeout(()=>{
                if(this.state === pending){
                    this.state = fulfilled;
                    this.value = value;
                    this.onFulfilledCb.map(cb=>{
                        this.value = cb(this.value);
                    })
                }
            })
        }
        const reject = reason =>{
            setTimeout(()=>{
                if(this.state === pending){
                    this.state = rejected;
                    this.reason = reason;
                    this.onFulfilledCb.map(cb=>{
                        this.reason = cb(this.reason);
                    })
                }
            })
        }
        try{
            fn(resolve,reject)
        }catch(e){
            reject(e)
        }
    }
    then(onFulfilled,onRejected){
        if(typeof onFulfilled==='function'){
            this.onFulfilledCb.push(onFulfilled)
        }
        if(typeof onRejected==='function'){
            this.onRejectedCb.push(onRejected)
        }
        return this;
    }
}