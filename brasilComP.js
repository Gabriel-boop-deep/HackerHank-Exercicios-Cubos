//Input Format

//A entrada será sempre composta por três variáveis:

//palavras: que será sempre um array de strings, 
//contendo palavras que servem como base para a sua busca. As palavras sao 
//sempre com todas as letras minusculas e sem acentos
//primeiraLetra: que será sempre um string contendo apenas um caractere (minúsculo), 
//que deve ser a primeira letra das palavras
//segundaLetra: que será sempre um string contendo apenas um caractere (minúsculo), que deve ser a segunda letra das palavras

//{
 //   "primeiraLetra": "a",
 //   "segundaLetra": "v",
 //   "palavras": [
//    "aveia",
//     "manha",
//     "ave"
 //   ]
 // }

let palavras = ["aveia","manha","ave", 'bete'];
let primeiraLetra = 'a';
let segundaLetra = 'v';
let contador = 0;
for (let verificador of palavras){

    if (verificador[0] == primeiraLetra && verificador[1] == segundaLetra){
        //Aqui irá imprimir as palavras que atenderem os requisitos
        console.log(verificador);
        //conta a quantidade de palavras que passam pelo filtro
        contador++;
    } 
}
if (contador == 0){
    console.log('NENHUMA');
}