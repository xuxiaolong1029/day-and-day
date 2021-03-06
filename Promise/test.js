let pending = 'pending';
let fulFilled = 'fulFilled';
let rejected = 'rejected'

class Promise{
    constructor(fn){
        this.state = pending;
        this.value = null;
        this.reason = null;

        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        const reselve = value =>{
            setTimeout(()=>{
                if(this.state === pending){
                    this.state = fulFilled;
                    this.value = value;
                    this.onFulfilledCallbacks.map(cb=>{
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
                    this.onRejectedCallbacks.map(cb=>{
                        this.reason = cb(this.reason);
                    })
                }
            })
        }

        try{
            fn(reselve,reject)
        }catch(e){
            reject(e)
        }
    }
    then(onFulfilled,onReject){
        if(typeof onFulfilled === 'function'){
            this.onFulfilledCallbacks.push(onFulfilled)
        }
        if(typeof onReject === 'function'){
            this.onRejectedCallbacks.push(onReject)
        }
        return this
    }
    
}