///Input Format

///A entrada do problema será sempre um array de números chamado disparos, que contém a pontuação de cada disparo.

///Output Format

///Caso o competidor seja aprovado, imprima na tela a quantidade de disparos acima de 70 pontos. Caso o competidor seja eliminado, imprima apenas a mensagem ELIMINADO

let tirosPontuacao = [50,70,30,60,70,80];

tirosPontuacao = [0, 50, 90, 80 ,100 ,80, 40];

// inicializar um contador, será necessários para quantifiicar pontos acima de 70

let contador = 0;

// Fazendo para varrer a lista de pontuações

for (tiros of tirosPontuacao){
    if (tiros>=70){
        contador++;
    }
}
let ternario = (contador>= 3 ? contador = contador : 'ELIMINADO');

console.log(ternario)