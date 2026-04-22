// Usar any é "desligar" o TypeScript naquele trecho de código. Tira o sentido de usar uma lingueagem extremamente tipada.
// O any é contagioso. Se uma função retorna any, a variável que recebe esse resultado também se torna "misteriosa". Em pouco tempo, seu projeto inteiro está cheio de furos na verificação, e o TypeScript se torna apenas um peso extra no projeto sem entregar benefício nenhum.

let moviesCount: any = 5

moviesCount = 4
moviesCount = "string"

// Então quando eu devo usar o any?
// O any pode ser usado quando trabalhamos com códigos antigos que não podem ser refatorados.
// O any pode ser usado quando trabalhamos com bibliotecas externas, em que os tipos não estão definidos.