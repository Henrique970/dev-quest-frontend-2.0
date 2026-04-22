// Muito bom usar isso, pois eu tenho um ponto único de mudança. Caso minhas variáveis não poderem mais receber valores como strings era só apagar o tipo no type.
type id = number | string;

// Fazendo isso, o idCustomer também pode ser um número e uma string
let idCustomer: id;

idCustomer = 123;
idCustomer = "abc"

let idProduct: id;

idProduct = 123;
idProduct = "abc"