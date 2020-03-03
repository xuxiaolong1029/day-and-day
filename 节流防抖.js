//防抖(debounce)：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
//典型的案例就是输入框搜索：输入结束后n秒才进行搜索请求，n秒内又输入的内容，则重新计时。
function debounce(handle){
  let timeout = null // 创建一个标记用来存放定时器
  return function(){
      clearTimeout(timeout) // 每当用户调用的时候把前一个定时器清空
      timeout = setTimeout(() => {
          handle.apply(this,arguments)
      },500) // 500ms后触发，期间再次调用，则重新计算延时
  }
}
function sayHi(){
  console.log('防抖成功')
}
var btn = document.getElementById('button')
btn.addEventListener('click',debounce(sayHi))

//节流(throttle)：规定在一个单位时间内，只能触发一次函数，如果这个单位时间内触发多次函数，只有一次生效。
//典型的案例就是鼠标不断点击触发，规定在n秒内多次点击只生效一次
function throttle(handle){
  let canRun = true // 通过闭包保存一个标记，不被回收
  return function(){
      if(!canRun) return // 在函数头部判断标记是否为true，为false时不允许调用handle
      canRun = false // 设置标记为false
      setTimeout(() => { // 将外部传入的函数的执行放在setTimeout中
        fn.apply(this, arguments)
        // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
        canRun = true
      }, 500);
  }
}
function sayHi() {
console.log('节流成功');
}
var btn = document.getElementById('button');
btn.addEventListener('click', throttle(sayHi)); // 节流