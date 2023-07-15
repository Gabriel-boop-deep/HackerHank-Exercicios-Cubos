let sequencia = '>>>>>>>>>'

//sei que no meu array o limite está entre 0 e 6
//Cada > soma mais uma na posição
//Cada < subtrai menos um na posição

// a posição inicial é zero
// Estratégia:
//Posição começa no zero
//Se for >>>>>>>, temos 7, que é maior que 6, a posicao se torna zero e comeca a contar
// se for < é menor que 0 , logo a posicao se torna 6 e vai diminuindo
let posicao = 0;

for (seta of sequencia) {
    if (seta == '>') {
        posicao++;
        if (posicao > 6) {
            posicao = -1;
            posicao++;
        }
    } else if (seta == '<') {
        posicao--;
        if (posicao < 0) {
            posicao = 7;
            posicao--;
        }
    }
}
console.log(posicao)

