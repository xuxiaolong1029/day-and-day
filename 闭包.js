/*
  闭包：
  定义：闭包就是能够读取其他函数内部变量的函数
  作用：1.可以读取函数内部的变量，2.让这些变量的值始终保持在内存中
  常见使用场景：函数封装，定时器
  优缺点：优 a.变量长期驻扎在内存中；b:避免全局变量的污染。 c:私有成员的存在
          缺  常驻内存 会增大内存的使用量 使用不当会造成内存泄露
*/
//例1：
function a() {
    let i = 0;
    function b() {
        console.log(++i);
        //如果console.log(++i) 则结果 为0 ，1,2
    }
    return b;
}
let c = a();

c(); //1
c();//2
c();//3

//例2
var num = new Array();
for(var i=0;i<4;i++){
    num[i] = f1(i);
}
function f1(n){
    function f2() {
        console.log(n)
    }
    return f2
}
num[2]();
num[1]();
num[0]();
num[3]();
console.log(num);
