let preco = 100;
let desconto = 20; // em porcentagem

let valorDesconto = (preco * desconto) / 100;
let precoFinal = preco - valorDesconto;

console.log("Preço final com desconto:", precoFinal);