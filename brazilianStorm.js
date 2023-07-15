let notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
let maiorNota = Math.max(...notas);
let menorNota = Math.min(...notas);

//Pegando o indice de cada um desses valores

let indiceMaiorNota = notas.indexOf(maiorNota);
let indiceMenorNota = notas.indexOf(menorNota);

let notasTratadas = [];

//Fazendo o laço for para varrer as notas

for (let i = 0; i< notas.length; i++){
    //Todos os valares foram adiconados a lista menos o maior e o menor valor
    if(i!= indiceMaiorNota && i!= indiceMenorNota){
        notasTratadas.push(notas[i]);
    }
}
//Para fazer o calcula da media

let soma=0;
let quantidade = notasTratadas.length;
let media;

for( let novosValores of notasTratadas){
    soma+=novosValores;
}
media = soma / quantidade;

console.log(media);