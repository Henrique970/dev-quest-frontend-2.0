// Muito importante quando trabalhamos com StatusCode (códigos de status).
enum StatusCode {
    OK = 200,
    BadRequest = 400,
    NotFound = 404
}

// Como pegar os valores
const ok = StatusCode.OK; //200
const indexOk = StatusCode["OK"]; //200
const stringBadRequest = StatusCode[404]; //NotFound