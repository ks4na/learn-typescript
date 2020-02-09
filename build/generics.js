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
// generics 泛型
function identity(arg) {
    return arg;
}
console.log(identity('13'));
console.log(identity('abc'));
// 泛型类型
var foo;
foo = identity;
// 泛型类型的对象字面量
var foo2 = foo;
var foo4 = identity;
console.log('foo4: ', foo4('xxx'));
var foo5;
foo5 = identity;
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
console.log(myGenericNumber.add(myGenericNumber.zeroValue, 3)); // 3， 0 + 3
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = '';
stringNumeric.add = function (x, y) {
    return x + y;
};
console.log(stringNumeric.add(stringNumeric.zeroValue, 'abc')); // 'abc', '' + 'abc'
function identity1(arg) {
    console.log(arg.length);
    return arg;
}
// identity1(3)  // Error, number doesn't have a .length property
identity1({ value: 3, length: 1 }); // OK
identity1('123');
// 泛型约束中使用类型参数
var Animal = /** @class */ (function () {
    function Animal() {
        this.name = 'animal';
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'dog';
        return _this;
    }
    return Dog;
}(Animal));
function isInstance(ins, c) {
    return ins instanceof c;
}
console.log(isInstance(new Dog(), Animal));
function getProperty(obj, key) {
    return obj[key];
}
var obj = {
    a: 1,
    b: 'string',
    c: true,
    d: null
};
getProperty(obj, 'b');
// getProperty(obj, 'm')  // Error
// 泛型中使用类类型
function createInstance(c) {
    return new c();
}
var Cat = /** @class */ (function () {
    function Cat() {
        this.name = 'cat';
    }
    return Cat;
}());
var Mouse = /** @class */ (function () {
    function Mouse() {
        this.name = 'mouse';
    }
    return Mouse;
}());
function createInstance2(c) {
    return new c();
}
console.log(createInstance2(Cat).name);
console.log(createInstance2(Mouse).name);
var Page = /** @class */ (function () {
    function Page(currentPage, pageSize, total, dataList) {
        this.currentPage = 0;
        this.pageSize = 5;
        this.total = 0;
        this.dataList = [];
        this.currentPage = currentPage || this.currentPage;
        this.pageSize = pageSize || this.pageSize;
        this.total = total || this.total;
        this.dataList = dataList || this.dataList;
    }
    return Page;
}());
var pagedAnimals = new Page(1, 10, 200, [new Animal()]);
pagedAnimals = new Page();
console.log(pagedAnimals);
