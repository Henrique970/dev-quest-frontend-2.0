// Quando criamos um enum é sempre importante iniciar ele com uma letra maiúscola.
// Ele inicializado por valor 0 por padrão. Caso não queira iniciar o enum com valor 0, é possível atribuir um novco valor. Se colocar o primeiro valor com 1 os outros vão ser reatribuidos sucetivamente.
enum Colors {
    Red,
    Blue,
    Green
}

function showColor(color: any) {
    console.log(color);
}

showColor(Colors.Red); // Exibe "Vermelho"

// Podemos percorrer o enum usando for
for (let color in Colors) {
    console.log(color); // Ele vai percorrer os 6 elementos: 0, 1, 2, Red, Blue e Green
}