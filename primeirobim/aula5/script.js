const valorConta = 100
const percentualGorjeta = 15

const valorGorjeta = valorConta * (percentualGorjeta / 100);

const valorTotal = valorConta + valorGorjeta;

console.log(
`Valor da Conta:R$ ${valorConta}, Gorjeta (${percentualGorjeta}%): R$ ${valorGorjeta}, Total a pagar: R${valorTotal}`
);
