
let a: number = 5;

let b: number = 4;

let c: string = 'hello';

let b_2 = 4;

let c_2 = 'hello';

let d = true;

let arr: string[] = ['asd', 'hi', 'my', 'name', 'is', 'vlad']

let e: any = 3;  //probably unrecommended

e = 'meow';

function test(a: string): number | string {
    return '';
}

const test2 = (a: number): void => {
    return;
}

arr = arr.map((x: string) => x.toUpperCase())

function countCoord(coord: { lat: number, long?: number | undefined }) {    //? unnesessary 

}
//safety type
function printIt(id: number | string) {
    if (typeof id == 'number') {
        console.log(id.toString());
    }
    else if (typeof id == 'string') {
        id.toUpperCase()
    }
}

function getSum(a: number | number[]) {
    if (Array.isArray(a)) {
    }
    else {
    }
}

const x: undefined = undefined;
const z: null = null;
