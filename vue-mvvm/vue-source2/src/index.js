import Vue from 'vue'; // 会默认先查找source 目录下的vue文件夹
// es6 类  构造函数 es5的类

let vm = new Vue({
    el:'#app', // 表示要渲染的元素是app
    data(){
        return { // Object.defineProperty
            msg:'hello',
            school:{name:'zf',age:10},
            arr:[1,2,3]
        }
    },
    computed:{

    },
    watch:{

    }
});
// vm.msg = vm._data.msg // 代理
console.log(vm.school)