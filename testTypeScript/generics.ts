function logTime(num: any): any {
    console.log(new Date());
    return num;
}
// use generics

function logTimeGen<T>(num: T): T {
    console.log(new Date());
    return num;
}

logTimeGen<string>('hello');
logTimeGen<number>(123);

function logTimeGen2<T>(num: T): T {
    if (typeof num == 'string') {
        num.toLocaleUpperCase();
    }
    return num;
}

interface MyInterface {
    transform: <T, L>(a: T) => L
}

class MyGenClass<T>{
    value: T;
}

const someobj = new MyGenClass<number>()

someobj.value


interface TimeStamp {
    stamp: number;
}
//generics extends
function logTimeStamp<T extends TimeStamp>(num: T): T {
    console.log(num.stamp)
    return num;
}
//gets a of any type and returns T or boolean
type func = <T>(a: T) => T | boolean;
