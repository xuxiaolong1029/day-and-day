/*
*外观模式即让多个⽅方法⼀一起被调⽤用
涉及到兼容性，参数⽀支持多格式，有很多这种代码，对外暴暴露露统⼀一的api，⽐比如上⾯面的$on ⽀支持数组，
￥off参数⽀支持多个情况， 对⾯面只⽤用⼀一个函数，内部判断实现
* */
//阻止冒泡
myEvent = {
    stop:function (e) {
        if(typeof e.preventDefault()==='function'){
            e.preventDefault();
        }
        if(typeof e.stopPropagation()==='function'){
            e.stopPropagation();
        }
        // for IE
        if(typeof e.returnValue==='boolean'){
            e.returnValue=false
        }
        if(typeof e.cancelBubble==='boolean'){
            e.cancelBubble=false
        }
    },
    addEvent(dom,type,fn){
        if(dom.addEventListener){
            dom.addEventListener(type,fn,false);
        }else if(dom.attachEvent){
            dom.attachEvent('on'+type,fn)
        }else{
            dom['on'+type] = fn;
        }
    }
}
