/*
    享元(flyweight)模式是⼀一种⽤用于性能优化的模式，“fly”在这⾥里里是苍蝇的意思，意为蝇量量级。享元模
    式的核⼼心是运⽤用共享技术来有效⽀支持⼤大量量细粒度的对象。 如果系统中因为创建了了⼤大量量类似的对象
    ⽽而导致内存占⽤用过⾼高，享元模式就⾮非常有⽤用了了。在 JavaScript 中，浏览器器特别是移动端的浏览器器
    分配的内存并不不算多，如何节省内存就成了了⼀一件⾮非常有意义的事情。
*/
//例子 现在⼀一共有 50 种男内 ⾐衣和 50 种⼥女女内⾐衣，所以⼀一共会产⽣生 100 个对象。如果将来⽣生产了了
// 10000 种内⾐衣，那这个程序可能会因为存在如此多的对象已经提前崩溃。 下⾯面我们来考虑⼀一下如何优化
// 这个场景。虽然有 100 种内⾐衣，但很显然并不不需要 50 个男 模特和 50 个⼥女女模特。其实男模特和⼥女女模特
// 各⾃自有⼀一个就⾜足够了了，他们可以分别穿上不不同的内⾐衣来拍照。

/*只需要区别男⼥女女模特
那我们先把 underwear 参数从构造函数中 移除，构造函数只接收 sex 参数
*/
var Model = function (sex) {
    this.sex = sex;
};
Model.prototype.takePhoto = function () {
    console.log( 'sex= ' + this.sex + ' underwear=' + this.underwear);
};
//分别创建一个男模特对象和一个女模特对象
var maleModel = new Model('male');
var femaleModel = new Model('female');
for(let i=1;i<=50;i++){
    maleModel.underwear = 'underwear' + i;
    maleModel.takePhoto();
}
for(let i=1;i<=50;i++){
    femaleModel.underwear = 'underwear' + i;
    femaleModel.takePhoto();
}
//只需要两个对象便便完成了了同样的功能
