// Aqui a ordem importa. Se ta pedindo dois valores, você coloca dois valores.
// Muito usado no useState do react. 
const stringNumber: [string, number] = ["Henrique", 123]

// Muito útil em definição de cores
const rbgColor: [number, number, number] = [255, 0, 0];

// A partir do TypeScript 3.0 é possível ter elementos opcionais nas tuplas. Coloco o ponto de interrogação para dizer que é opcional.
const rbgaColor: [number, number, number, number?] = [255, 0, 0];
