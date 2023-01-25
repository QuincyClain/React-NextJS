"use strict";
function logTime(num) {
    console.log(new Date());
    return num;
}
// use generics
function logTimeGen(num) {
    console.log(new Date());
    return num;
}
logTimeGen('hello');
logTimeGen(123);
function logTimeGen2(num) {
    if (typeof num == 'string') {
        num.toLocaleUpperCase();
    }
    return num;
}
class MyGenClass {
}
const someobj = new MyGenClass();
someobj.value;
//generics extends
function logTimeStamp(num) {
    console.log(num.stamp);
    return num;
}
