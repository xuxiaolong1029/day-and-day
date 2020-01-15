/*
  和⼯工⻓长模式相⽐比，参与了了更更多创建的过程 或者更更复杂
*/
var Person  = function (name,work) {
    //创建应聘者缓存对象
    var _person = new Human();
    //创建应聘者姓名解析对象
    _person.name = new Named(name);
    // 创建应聘者期望职位
    _person.work = new Work(work);
    return _person
}
var person = new Person('xiaolong','code');
console.log(person)
