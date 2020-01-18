/*
  原型和原型链
  定义：原型：原型(prototype)是function对象的一个属性，它定义了构造函数制造出的对象的公共祖先（公共的属性和方法）通过该构造函数产生的对象，
        可以继承改原型的属性和方法。 原型也是对象。(通俗的说，原型就是一个模板，更准确的说是一个对象模板)
        原型链：就是利用原型让一个引用类型继承另一个引用类型的属性和方法；

*/
function Person(name,age,gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayName=function () {
        console.log(this.name)
    }
}
Person.prototype.sayName = function () {
    console.log(this.name)
};
var person = new Person('猴子',18,'男');
var dog = new Person('旺财',4,'雄');
console.log(person.sayName());
console.log(dog.sayName());
