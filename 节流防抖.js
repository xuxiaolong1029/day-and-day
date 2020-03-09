//防抖(debounce)：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
//典型的案例就是输入框搜索：输入结束后n秒才进行搜索请求，n秒内又输入的内容，则重新计时。
let timer;
function debounce(){
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      console.log("防抖...");
      timer = undefined;
    },2000);
}

//节流(throttle)：规定在一个单位时间内，只能触发一次函数，如果这个单位时间内触发多次函数，只有一次生效。
//典型的案例就是鼠标不断点击触发，规定在n秒内多次点击只生效一次
let timer, lastTime;
let now = new Date();
function throttle(){
  if(lastTime && now - lastTime < 200) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log("点击...");
        lastTime = +new Date();
      },2000);
  }else{
      lastTime = now;
      timer = setTimeout(() => {
        console.log("点击...");
        lastTime = +new Date();
      },200);
  }
}

//  //节流
//  const throttle = (func,wait=100)=>{
//   let lastTime = 0
//   return (...args)=>{
//       let now  = new Date().getTime()
//       if (now-lastTime>wait){
//           func.apply(this,args)
//           let lastTime = now
//       }
//   }
// }
// //防抖
// const debounce = (func,wait=350)=>{
//   let timer =0;
//   return (...args)=>{
//       if(timer){
//           clearTimeout(timer)
//       }
//       timer = setTimeout(()=>{
//           func.apply(this,ages)
//       },wait)
//   }
// }
// window.addEventListener('scroll',
// debounce(()=>{
//    console.log(i)
// },350)
// )