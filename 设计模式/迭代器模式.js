/*
    迭代器器模式是指提供⼀一种⽅方法顺序访问⼀一个聚合对象中的各个元素，⽽而⼜又不不需要暴暴露露该对象的内
    部表示。迭代器器模式可以把迭代的过程从业务逻辑中分离出来,在使⽤用迭代器器模式之后，即使不不关
    ⼼心对象的内部构造，也可以按顺序访问其中的每个元素
*/
// 例子 这个⽤用的就太多了了 each map啥乱遭的
var each = function( ary, callback ){
    for ( var i = 0, l = ary.length; i < l; i++ ){
        callback.call( ary[i], i, ary[ i ] );
    }
};
each( [ 1, 2, 3 ], function( i, n ){
    alert ( [ i, n ] );
})
