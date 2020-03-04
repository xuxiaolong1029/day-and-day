// new Kvue({data})
class XVue {
    constructor(options){
        this.$options = options;
        //数据响应化
        this.$data = options.data;
    debugger
        this.Observe(this.$data);

        //测试代码 模拟一下Watcher
      /*  new Watcher(); this.$data.test;
        new Watcher(); this.$data.foo.bar;*/
        new Compile(options.el,this);
        //created执行
        if(options.created){
            options.created.call(this)
        }
    }
    Observe(value){
        if(!value || typeof value!=='object'){
            return false;
        }
        //遍历对象
        Object.keys(value).map(key =>{
            this.defineReactive(value,key,value[key]);
            //代理data中的属性到vue实例上
            this.proxyData(key);
        })
    }
    //数据响应化
    defineReactive(obj,key,val){
        if(typeof val === 'object'){
            this.Observe(val);//递归 解决数据的嵌套
            return false
        }

        const dep = new Dep();
        Object.defineProperty(obj,key,{
            get(){
                Dep.target && dep.addDep(Dep.target);
                return val
            },
            set(newVal){
                if(newVal===val){
                    return false
                }
                val = newVal;
                //console.log(`${key}属性更新了：${val}`)
                dep.notify();
            }
        })
    }

    proxyData(key){
        Object.defineProperty(this,key,{
            get(){
                return this.$data[key]
            },
            set(newVal){
                this.$data[key] = newVal;
            }
        })
    }
}

//Dep 用来管理Watcher
class Dep {
    constructor(){
        //这里存放若干依赖( watcher )
        this.deps = [];
    }
    addDep(dep){
        this.deps.push(dep);
    }
    //通知
    notify(){
        this.deps.forEach(dep => dep.update());
    }
}

//Watcher
class Watcher {
    constructor(vm,key,callback){
        this.vm = vm;
        this.key = key;
        this.callback = callback;
        //将当前Watcher实例指定的Dep静态属性target
        Dep.target = this;
        this.vm[this.key];//触发getter,添加依赖
        Dep.target = null;
    }
    update(){
       // console.log('属性更新了')
       this.callback.call(this.vm,this.vm[this.key]);
    }
}
