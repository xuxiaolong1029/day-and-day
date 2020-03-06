var arr1=[
    {name:'李',age:23},
    {name:'徐',age:25}
];
var arr2 = [
    {name:'李',age:23,job:'前端'},
    {name:'徐',age:25,job:'java'}
];
function arrToObj1(arr){
    return(Object.assign(...Object.keys(arr[0]).map(key =>{
        return{
            [key]:arr.map(it=>it[key])
        }
    })))
}
let obj1 = arrToObj1(arr1);
let obj2 = arrToObj1(arr2);
console.log(obj1);
console.log(obj2);
