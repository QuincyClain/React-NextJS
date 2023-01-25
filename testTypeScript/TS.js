"use strict";
let a = 5;
let b = 4;
let c = 'hello';
let b_2 = 4;
let c_2 = 'hello';
let d = true;
let arr = ['asd', 'hi', 'my', 'name', 'is', 'vlad'];
let e = 3; //probably unrecommended
e = 'meow';
function test(a) {
    return '';
}
const test2 = (a) => {
    return;
};
arr = arr.map((x) => x.toUpperCase());
function countCoord(coord) {
}
//safety type
function printIt(id) {
    if (typeof id == 'number') {
        console.log(id.toString());
    }
    else if (typeof id == 'string') {
        id.toUpperCase();
    }
}
function getSum(a) {
    if (Array.isArray(a)) {
    }
    else {
    }
}
const x = undefined;
const z = null;
