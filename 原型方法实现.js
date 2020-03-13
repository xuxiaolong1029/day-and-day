//实现instanceOf
function instanceOf(L, R) {  // L 表示instanceof左边，R 表示instanceof右边
    let O = R.prototype;     // 取 R 的显示原型
    L = L.__proto__;          // 取 L 的隐式原型
    while (true) {            // 循环执行，直到 O 严格等于 L
        if (L === null) return false;
        if (O === L) return true;
        L = L.__proto__;
    }
}

// bind
Function.prototype.bind = function(){
	//get context
	let context = arguments[0];
	//get function invoked in the future
	let fn = this;
	// get front args
	let frontArgs = Array.prototype.slice.call(arguments,1);
	return function(){
		let afterArgs = Array.prototype.slice.call(arguments,0);
		let finalArgs = frontArgs.concat(afterArgs);
		return fn.apply(context,finalArgs )
	}
}
// forEach
Array.prototype.forEach = function(fn){
	if(typeof fn !== "function"){
		throw "参数必须为函数"
	}
	//get array going to be iterated
	let arr = this;
	if(!Array.isArray(arr)){
		throw "只能对数组使用forEach方法"
	}
	
	for(let index=0;index<arr.length;index++){
		fn(arr[index],index,arr)
	}
}
// filter
Array.prototype.filter = function(fn){
	if(typeof fn !== "function"){
		throw "参数必须为函数"
	}
	//get array going to be iterated
	let arr = this;
	if(!Array.isArray(arr)){
		throw "只能对数组使用forEach方法"
	}
	let result = [];
	for(let index=0;index<arr.length;index++){
		let invokedReturn = fn(arr[index],index,arr);
		if( invokedReturn ){
			result.push(arr[index])
		}		
	}
	return result;
}

// reduce
Array.prototype.reduce= function(fn,accumulator){
	if(typeof fn !== "function"){
		throw "参数必须为函数"
	}
	//get array going to be iterated
	let arr = this;
	if(!Array.isArray(arr)){
		throw "只能对数组使用forEach方法"
	}
	let index = 0;
	if(!accumulator){
		index = 1;
		accumulator = arr[0];
	}
	for(;index<arr.length;index++){
		let invokedReturn = fn(accumulator ,arr[index],index,arr);
		accumulator = invokedReturn ;
	}
	return accumulator ;
}
//some
Array.prototype.some= function(fn){
	if(typeof fn !== "function"){
		throw "参数必须为函数"
	}
	//get array going to be iterated
	let arr = this;
	if(!Array.isArray(arr)){
		throw "只能对数组使用forEach方法"
	}
	for(let index=0;index<arr.length;index++){
		let invokedReturn = fn(arr[index],index,arr);
		if( invokedReturn ){
			return true;
		}		
	}
	return false;
}

//find
Array.prototype.find= function(fn){
	if(typeof fn !== "function"){
		throw "参数必须为函数"
	}
	//get array going to be iterated
	let arr = this;
	if(!Array.isArray(arr)){
		throw "只能对数组使用forEach方法"
	}

	for(let index=0;index<arr.length;index++){
		let invokedReturn = fn(arr[index],index,arr);
		if( invokedReturn ){
			return arr[index]
		}		
	}
	return void 0;
}

