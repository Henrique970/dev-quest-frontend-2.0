export {};

function makeArray<T>(itens: T[]): void {
    itens.forEach(item => console.log(item))
}

makeArray<number>([17, 22, 7, 66]);

makeArray<string>(["Hello World", "Typescript", "Study"]);

