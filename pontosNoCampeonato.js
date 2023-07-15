//Cada item desse array é sempre do tipo string, contendo uma das opções abaixo:

//V, que representa que o time venceu essa partida 3
//E, que representa que o time empatou essa partida 1
//D, que representa que o time perdeu essa partida 0

let resultados = ["V","E","V","E"],contador = 0;
for (let pontos of resultados){
    if (pontos === 'V'){
        contador+=3;
    } else if ( pontos === 'E'){
        contador+=1;
    }
}
console.log(contador);