// Aqui você está dando dois possíveis tipos diferentes para a variável. Pense nessa barra como "ou", ou ela é desse tipo ou é do outro.
// Não funciona com variáveis do tipo constante, pois define dois possíveis valores diferentes para as mesma variável.
function printClintId(id:number | string) {
    console.log(`O id do cliente é ${id}`);
}

printClintId(100);
printClintId("Palmeiras não tem mundial");