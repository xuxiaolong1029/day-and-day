import Vue from 'vue'; // 会默认先查找source 目录下的vue文件夹
// es6 类  构造函数 es5的类

let vm = new Vue({
    el:document.getElementById('app'), // 表示要渲染的元素是app
    data(){
        return { // Object.defineProperty
            msg:'hello',
            school:{name:'zf',age:10},
            arr:[{a:1},2,3]
        }
    },
    computed:{

    },
    watch:{

    }
});
// vm.msg = vm._data.msg // 代理

// 对原生的方法进行劫持
// 如果新增的属性 也是对象类型 我们需要对这个对象 也进行观察 observe
console.log(vm.arr);

// 什么样的数组会被观测 [0,1,2] observe 不能直接改变索引不能被检测到
// [1,2,3].length--  因为数组的长度变化 我们没有监控

// [{a:1}] // 内部会对数组里的对象进行监控
// [].push / shift unshift 这些方法可以被监控 vm.$set 内部调用的就是数组的splice