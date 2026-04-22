enum StatusPedido {
    Pendente = "Pendente", 
    Pago = "Pago", 
    Enviado = "Enviado"
}

const estadoAtual: StatusPedido = StatusPedido.Pendente;
console.log(`Status do pedido: ${estadoAtual}`);


