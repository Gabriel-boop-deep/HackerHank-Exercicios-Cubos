// ma loja que está com um estoque muito grande acumulado resolveu fazer uma promoção para que os clientes levem mais produtos.

// Caso o cliente compre 5 ou mais produtos, o mais barato deles sairá de graça!

// Para que essa promoção funcionasse, foi necessário fazer uma atualização no software do caixa para que fosse possível calcular o valor correto que o cliente deve pagar.

// Você ficou com essa tarefa.


let listaCompras = [5, 50, 35, 50];

// Verificando o comprimento da lista:

let quantidadeDeItens = listaCompras.length;
// posso somar os itens normalmente da lista e subtrair do item mais barato
// caso a quantidadeDeItens for maior que 5
let soma = 0;
for (item of listaCompras) {
    soma += item;
}
if (quantidadeDeItens >= 5) {
    soma = soma - Math.min(...listaCompras);
} else {
    soma = soma;
}
console.log(soma)