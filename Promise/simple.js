const pending = 'pending';
const resolved = 'resolved';
const Rejected = 'Rejected';

class Promise{
    constructor(fn){
        this.state = pending;
        this.value = null;
        this.reason = null;

        this.onResolvedCallbacks=[];
        this.onRejectedCallbacks=[];

        const resolve = value =>{
            setTimeout(()=>{
                if(this.state === pending){
                    this.state = resolved;
                    this.value = value;
                    this.onResolvedCallbacks.map(cb=>{
                        this.value = cb(this.value);
                    })
                }
            })
        }
        const reject = reason =>{
            setTimeout(()=>{
                if(this.state === pending){
                    this.state = Rejected;
                    this.reason = reason;
                    this.onResolvedCallbacks.map(cb=>{
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
    then(onResolved,onRejected){
        if(typeof onResolved==='function'){
            this.resolvedCallbacks.push(onResolved)
        }
        if(typeof onRejected==='function'){
            this.RejectedCallbacks.push(onRejected)
        }
        return this
    }
}