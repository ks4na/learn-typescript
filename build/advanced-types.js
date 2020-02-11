"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// 交叉类型 intersection types
function extend(first, second) {
    var ret = {};
    for (var key in first) {
        ret[key] = first[key];
    }
    for (var key in second) {
        if (!ret.hasOwnProperty(key)) {
            ret[key] = second[key];
        }
    }
    return ret;
}
var Square = /** @class */ (function () {
    function Square(length) {
        this.name = 'square';
        this.length = length;
    }
    return Square;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.name = 'circle';
        this.pi = 3.14;
        this.radius = radius;
    }
    return Circle;
}());
var squ = new Square(1);
var cir = new Circle(2);
var rectangle = extend(squ, cir);
console.log(rectangle);
var rect = {
    name: 'rect',
    length: 1,
    pi: 2,
    radius: 12
};
// 联合类型 union types
function padLeft(str, padding) {
    if (typeof padding === 'string') {
        return padding + str;
    }
    else {
        return new Array(padding + 1).join(' ') + str;
    }
}
console.log(padLeft('abc', 4));
console.log(padLeft('abc', 'cba'));
function getRandomPet() {
    var eat = function () {
        console.log('eat');
    };
    var fly = function () {
        console.log('fly');
    };
    var swim = function () {
        console.log('swim');
    };
    var flag = Math.random() > 0.5;
    if (flag) {
        var bird = { eat: eat, fly: fly };
        return bird;
    }
    else {
        var fish = { eat: eat, swim: swim };
        return fish;
    }
}
var pet = getRandomPet();
// if ((pet as Fish).swim) {
//   ;(pet as Fish).swim()
// } else {
//   ;(pet as Bird).fly()
// }
function isFish(pet) {
    return pet.swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly(); // TypeScript还能确定else分支中是Bird类型
}
// typeof类型保护
function isNotEmpty(arg) {
    if (!arg) {
    }
    else {
        arg.length;
    }
}
// instanceof 类型保护
var Dog = /** @class */ (function () {
    function Dog() {
        this.name = 'dog';
        this.bark = function () {
            console.log('wang wang');
        };
    }
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
        this.name = 'cat';
        this.climb = function () {
            console.log('climb');
        };
    }
    return Cat;
}());
function getPet2() {
    if (Math.random() < 0.5) {
        return new Dog();
    }
    else {
        return new Cat();
    }
}
var pet2 = getPet2();
if (pet2 instanceof Dog) {
    pet2.bark();
}
else {
    pet2.climb();
}
// null和undefined类型保护和类型断言
var s = '12';
// s = undefined  // error
// s = null  // error
var sn = '12';
sn = undefined; // ok
sn = null; // ok
// 可选属性和可选参数自动添加 | undefined
function f(x, y) {
    return x + (y || 0);
}
console.log(f(1, 2));
console.log(f(1, undefined));
var o = {
    name: 'o'
};
o.name = undefined;
// null和undefined的类型保护
function checkType(arg) {
    if (arg === null) {
        console.log('null');
    }
    else if (arg === undefined) {
        console.log('undefined');
    }
    else {
        console.log('string');
    }
}
checkType('123');
checkType(null);
checkType(undefined);
function ff(s) {
    return s || 'default';
}
console.log(ff('12'));
// function getInitial(name?: string | null) {
//   name = name || 'Bob'
//   function upperCase() {
//     return name!.toUpperCase()
//   }
//   return upperCase().charAt(0)
// }
function getInitial(name) {
    name = name || 'Bob';
    function upperCase() {
        return name.toUpperCase();
    }
    return upperCase().charAt(0);
}
var sp = {
    name: 'sp',
    serialize: function () {
        return 'serialized';
    }
};
var pos = {
    serialize: function () {
        return 'pos';
    }
};
var a = { name: 'a' };
var b = { name: 'b' };
var book = ['bookName', 'author', 12.4];
var str = 'age';
var node = {
    value: 12,
    left: null,
    right: null
};
var leftNode = {
    value: 1,
    left: null,
    right: null
};
node.left = leftNode;
console.log(node.left.value); // 1
var first = {
    name: 'Alice',
    next: null
};
var second = {
    name: 'Bill',
    next: null
};
var third = {
    name: 'Cris',
    next: null
};
first.next = second;
second.next = third;
function printNameOfPeople(chain) {
    if (chain) {
        console.log(chain.name);
        if (chain.next) {
            printNameOfPeople(chain.next);
        }
    }
}
printNameOfPeople(first);
function identity(arg) {
    return arg;
}
var st;
st = 'a';
function getStatusCode(status) {
    // if (status === 'Ok') {
    //   return 200
    // } else if (status === 'NotFound') {
    //   return 404
    // } else if (status === 'Forbidden') {
    //   return 401
    // } else {
    //   throw new Error('unknown response status')
    // }
    switch (status) {
        case 'Ok':
            return 200;
        case 'NotFound':
            return 404;
        case 'Forbidden':
            return 401;
        default:
            throw new Error('unknown response status');
    }
}
console.log(getStatusCode('Forbidden')); // 401
function getSound(animal) {
    switch (animal.kind) {
        case 'sheep':
            return animal.bleat();
        case 'cat':
            return animal.mew();
        case 'duck':
            return animal.quack();
        default:
            throw new Error('unknown animal');
    }
}
var ani = {
    kind: 'sheep',
    bleat: function () {
        console.log('bleating');
    }
};
getSound(ani);
// this类型
// 可以用来实现链式调用
var Calculator = /** @class */ (function () {
    function Calculator(value) {
        this.value = value;
    }
    Calculator.prototype.printValue = function () {
        console.log(this.value);
    };
    Calculator.prototype.add = function (num) {
        this.value += num;
        return this;
    };
    Calculator.prototype.multiply = function (num) {
        this.value *= num;
        return this;
    };
    return Calculator;
}());
new Calculator(1)
    .add(2)
    .multiply(3)
    .printValue();
var ScientificCalculator = /** @class */ (function (_super) {
    __extends(ScientificCalculator, _super);
    function ScientificCalculator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScientificCalculator.prototype.sin = function () {
        this.value = Math.sin(this.value);
        return this;
    };
    return ScientificCalculator;
}(Calculator));
new ScientificCalculator(0)
    .sin()
    .add(2)
    .printValue();
// 索引类型
// javascript写法
// function pluck(obj: any, keys: any[]) {
//   return keys.map(key => obj[key])
// }
// typescript 写法
function pluck(obj, keys) {
    return keys.map(function (key) { return obj[key]; });
}
var obj = {
    name: 'obj',
    age: 12,
    male: false
};
console.log(pluck(obj, ['name', 'age']));
function getProperty(obj, key) {
    return obj[key];
}
console.log(getProperty(obj, 'male'));
var keys; // keys 为 string 类型
var value; // value 为 number 类型
var x = {
    name: '12',
    age: 12
};
var y = {
    name: null,
    age: 12
};
function proxify(obj) {
    var newObj = {};
    for (var key in obj) {
        newObj[key] = getProxyValue(obj, key);
    }
    function getProxyValue(obj, key) {
        var addProxyValue = {
            get: function () {
                return obj[key];
            },
            set: function (value) {
                obj[key] = value;
            }
        };
        return addProxyValue;
    }
    return newObj;
}
var person = {
    name: 'Alice',
    age: 21
};
var proxifiedPerson = proxify(person);
console.log(person);
console.log(proxifiedPerson);
proxifiedPerson.age.set(22);
console.log(person);
console.log(proxifiedPerson.age.get());
// 映射类型的拆包推断
function unproxify(obj) {
    var ret = {};
    for (var key in obj) {
        ret[key] = obj[key].get();
    }
    return ret;
}
var originalPerson = unproxify(proxifiedPerson);
console.log(originalPerson);
