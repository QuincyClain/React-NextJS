//number
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

//str
enum DirectionStr {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

//combined
enum Deciion {
    Yes = 1,
    No = 'No'
}

enum Calc {
    a = 1,
    b = calcEnum()
}

function calcEnum(): number {
    return 2
}

function runEnum(obj: { Up: string }) {
}

runEnum(DirectionStr);

enum Test {
    A
}

let meow = Test.A;
let nameA = Test[meow]; //A

const enum ConstEnum {
    A,
    B
}

let variable = ConstEnum.A  //const in JS converted into concrete var

//default enums converted into functions

enum Block {
    One = 1,
    Two,
    Tree
}

function runBlock(block: Block) {
    switch (block) {
        case Block.One:
            return 'one';
        case Block.Two:
            return 'two';
        case Block.Tree:
            return 'tree';
        default:
            const hi: never = block;
    }
}