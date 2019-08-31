"use strict";
function printLabel(lblObj) {
    console.log(lblObj.label);
}
printLabel({ size: 20, label: 'size 20 label' });
var op1 = { label: 'optionalProp' };
var op2 = { label: 'op2', size: 21 };
var rc = { pi: 3.14, radius: 5.0 };
rc.radius = 10.0;
function createSquare(config) {
    // ...
    return { color: 'red', area: 12 };
}
var mySquare = createSquare({ colour: 'red', width: 20 });
var mySearch = function (src, subStr) {
    var result = src.search(subStr);
    return result > -1;
};
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.showInfo = function () {
        console.log("Student:: name: " + this.name + ", age: " + this.age);
    };
    return Student;
}());
var stu = new Student('yuusha', 24);
stu.showInfo();
var squ = { color: 'red', sideLength: 20 };
var cir = {};
cir.color = 'blue';
cir.penWidth = 4.0;
cir.radius = 3.14;
cir.label = 'circle';
