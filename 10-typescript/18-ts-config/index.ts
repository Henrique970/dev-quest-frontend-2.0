// O tsconfig.json é o "cérebro" do seu projeto, onde você define as regras de como o TypeScript deve se comportar e como ele deve converter seu código para JavaScript.

// Se não passar nenhum tipo para o age, o TS vai classifica-lo por any.
// Como você invalidou o any lá no tsconfig.json ele vai acusar erro 
function printAge (age: number) {
    console.log(age);
    
}