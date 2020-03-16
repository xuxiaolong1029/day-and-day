let arr = [5,3,7,2,8,2,9,21,9];
//冒泡排序
function bubblingSort(arr){
    for (var i = 0; i < arr.length - 1; i++) {
        // 内层循环,控制比较的次数，并且判断两个数的大小
        for (var j = 0; j < arr.length - 1 - i; j++) {
            // 白话解释：如果前面的数大，放到后面(当然是从小到大的冒泡排序)
            if (arr[j] > arr[j + 1]) {
                [arr[j + 1],arr[j]]=[arr[j],arr[j + 1]]
            }
        }
    }
 }
 bubblingSort(arr)
 console.log(arr)
 //快速排序
 function quickSort(arr) {
    if(arr.length<2){
        return arr
    }
    let pivotIndex = Math.floor(arr.length/2);
    let pivot = arr.splice(pivotIndex,1)[0];
    let leftArr = [];
    let rightArr = [];
    arr.filter(item=>{
        item<pivot?leftArr.push(item):rightArr.push(item)
    })
     return quickSort(leftArr).concat([pivot],quickSort(rightArr))
 }
//quickSort(arr)

function fn(n) {
    if(n<=2){
        return 1;
    }else{
        return fn(n-1)+fn(n-2);
    }
}
console.log(fn(2));
