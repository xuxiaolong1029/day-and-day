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
let arr = [5,3,7,2,8,2,9,21,9];
quickSort(arr)

function fn(n) {
    if(n<=2){
        return 1;
    }else{
        return fn(n-1)+fn(n-2);
    }
}
console.log(fn(2));
