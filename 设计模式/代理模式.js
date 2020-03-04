/*
    代理理模式：
    定义：为每个对象提供⼀个代⽤用品或占位符，以便便控制对它的访问。
    使用场景：比如图片懒加载，先缓存动态 loading，必要时传入 src
*/
//例：使⽤用虚拟代理理实现图⽚片懒加载
var imgFunc = (function () {
    var imgNode = document.createElement('img');
    document.body.appendChild(imgNode);
    return{
        setSrc:function (src) {
            imgNode.src = src;
        }
    }
})();
var proxyImage = (function () {
    var img = new Image();
    img.onload = function () {
        imgFunc.setSrc(this.src)
    }
    return{
        setSrc:function (src) {
            imgFunc.setSrc('./loading.gif');
            img.src = src;
        }
    }
})();
proxyImage.setSrc('./pic.png');
//例子2 函数的防抖 节流
