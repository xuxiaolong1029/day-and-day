/*
    策略略模式：
    定义：定义一个策略类只专注与各方法算法实现，定义一个接口调用这些方法
    特点：代码优雅，可读性高
*/
//例子1
// 奖金计算: 绩效为S的人年终奖有4倍工资 为A的人年终奖有3倍工资，而绩效为B的工资
var strategiesSalary = {
    'S':function (salary) {
        return salary * 4;
    },
    'A':function (salary) {
        return salary * 3;
    },
    'B':function (salary) {
        return salary * 2;
    }
};
var calculateBonus = function (level, salary) {
    return strategiesSalary[level](salary);
};
console.log(calculateBonus('S',2000));
console.log(calculateBonus('B',1000));
