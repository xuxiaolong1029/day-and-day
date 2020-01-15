let arr = [13,4,2,4,4,7,5,11,13];
let sum = 18;
//找数
function findSum(arr,sum){
  arr.forEach((x,i)=>{
    let indexof = arr.indexOf((sum-x));
    if(indexof>0){
      console.log(i,indexof);
    }
  })
}
//findSum(arr,sum);
//出现次数
function findAccount(arr){
  let obj={}
  for(let i of arr){
    if(!obj[i]){
      obj[i]=1
    }else{
      obj[i]=obj[i]+1
    }
  }
  for(let i in obj){
    console.log(`${i}出现了${obj[i]}`)
  }

}
//findAccount(arr);

//排序
//1.冒泡 (o^2)
function bubbleSort(arr) {
  for(let i=0,len=arr.length;i<len;i++){
    for(let j=0;j<len-i-1;j++){
      if(arr[j]>arr[j+1]){
        let temp = arr[j+1];
        arr[j+1]=arr[j];
        arr[j] = temp
      }
    }
  }
  console.log(arr)
}
//bubbleSort(arr);
//快速排序  找一个标志位
function quickSort(arr) {
  if(arr.length<1){
    return arr
  }
  let flag = arr[0];
  let right = [],left = [];
  for(let i=1;i<arr.length;i++){
    if(arr[i]>flag){
      right.push(arr[i])
    }else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat([flag].concat(quickSort(right)));
}
console.log(quickSort(arr));
console.log('script start')
async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
}
async1()
setTimeout(function() {
 console.log('setTimeout')
},0)

new Promise(resolve => {
  console.log('Promise');
  resolve()
}).then(function() {
  console.log('promise1')
}).then(function() {
  console.log('promise2')
})
console.log('script end')
