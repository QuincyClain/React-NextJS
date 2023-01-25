type Type = {
    x: number,
    y: number
};

type stringOrNumber = string | number;

type D3Point = Type & {
    z: number;
}

interface IPoint {
    x: number,
    y: number
};

interface I3DPoint extends IPoint {
    z: number;
};

function print1(coord: { x: number, y: number }) {
}
function print2(coord: Type) {
}
function print3(coord: IPoint) {
}

const r = (point: IPoint) => {
    const d: I3DPoint = point as I3DPoint; //cast to type I3D 
}

const canvas = document.getElementById('canvas') as HTMLCanvasElement  //cast to type

//interface recommended instead of types 

interface ICheck {
    a: number;
}

interface ICheck {
    b: number;
}

