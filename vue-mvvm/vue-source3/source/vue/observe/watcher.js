let id = 0;
class Watcher{ // 每次产生一个watcher 都要有一个唯一的标识
    /**
     * @param {*} vm 当前组件的实例 new Vue
     * @param {*} exprOrFn 用户可能传入的是一个表达式 也有可能传入的是一个函数
     * @param {*} cb 用户传入的回调函数 vm.$watch('msg',cb)
     * @param {*} opts // 一些其他参数
     */
    constructor(vm,exprOrFn,cb=()=>{},opts={}){
        this.vm = vm;
        this.exprOrFn = exprOrFn;
        if(typeof exprOrFn === 'function'){
            this.getter = exprOrFn; // getter就是new Watcher传入的第二个函数
        }
        this.cb = cb;
        this.opts = opts;
        this.id = id++;

        this.get(); // 默认创建一个watcher 会调用自身的get方法 
    }
    get(){
        this.getter(); // 让这个当前传入的函数执行
    }
}
// 渲染使用他 计算属性也要用他 vm.watch 也用他 
export default Watcher