"use strict";
//number
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
//str
var DirectionStr;
(function (DirectionStr) {
    DirectionStr["Up"] = "UP";
    DirectionStr["Down"] = "DOWN";
    DirectionStr["Left"] = "LEFT";
    DirectionStr["Right"] = "RIGHT";
})(DirectionStr || (DirectionStr = {}));
//combined
var Deciion;
(function (Deciion) {
    Deciion[Deciion["Yes"] = 1] = "Yes";
    Deciion["No"] = "No";
})(Deciion || (Deciion = {}));
var Calc;
(function (Calc) {
    Calc[Calc["a"] = 1] = "a";
    Calc[Calc["b"] = calcEnum()] = "b";
})(Calc || (Calc = {}));
function calcEnum() {
    return 2;
}
function runEnum(obj) {
}
runEnum(DirectionStr);
var Test;
(function (Test) {
    Test[Test["A"] = 0] = "A";
})(Test || (Test = {}));
let meow = Test.A;
let nameA = Test[meow]; //A
let variable = 0 /* ConstEnum.A */; //const in JS converted into concrete var
//default enums converted into functions
var Block;
(function (Block) {
    Block[Block["One"] = 1] = "One";
    Block[Block["Two"] = 2] = "Two";
    Block[Block["Tree"] = 3] = "Tree";
})(Block || (Block = {}));
function runBlock(block) {
    switch (block) {
        case Block.One:
            return 'one';
        case Block.Two:
            return 'two';
        case Block.Tree:
            return 'tree';
        default:
            const hi = block;
    }
}
