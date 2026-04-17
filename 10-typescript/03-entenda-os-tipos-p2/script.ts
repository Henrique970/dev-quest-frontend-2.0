// Arrays
let idades: number[] = [12, 22, 39]

let nomes: string[] = ["Henrique", "Francisco", "Santos"];

// Vamos estudar isso mais tarde
let idades2: Array<number> = [12, 22, 39];

// any é especial e usamos quando não queremos que tenha erro em verificação de tipos. Temos que tomar cuidado com o any, pois ele é muito tentador em usar nos tipos que não sabemos ou que não queremos pensar.
let obj: any = {x:0};

// A anotação de tipo de objeto
function imprimirCoordenadas(pt: {x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
imprimirCoordenadas({ x: 3, y: 7 });

let objeto: {x: number; y: string; z: boolean} = {x: 2, y: "Acabou o caô", z: true};