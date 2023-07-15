// 5 10 3
// Ordenando 3 5 10
// 30 10 54 76 1 4 35
// 1 4 10 30 35 54 70

let preco = [20, 15, 8, 2, 12];
//Meu raciocionio
//20[0] - 15[1] > 0 ? Tera preju
//20[0] - 8[2] > 0  ? Tera preju
//20[0] - 2[3] > 0  ? Tera preju
//20[0] - 12[4] > 0 ? Tera preju
//15[1] - 8[2] > 0  ? Tera preju
//15[1] - 2[3] > 0  ? Tera preju
//15[1] - 12[4] > 0 ? Tera preju
//8[2] -  2[3] > 0  ? Tera preju
//8[2] -  12[4] > 0 ? Não Tera preju
//2[3] -  15[4] > 0 ? Não Tera preju

preco = [5 ,10 ,3];
///      0    1   2   3  4  5  6

let j = 0;
let x = -1;
let prejuizoLista = [];
let tamanhoLista = preco.length -1;
//criando um laco while para que percorra toda a lista
while(x<tamanhoLista){
    //variavel de incremento
    x++;
    //Condicao do valor anterior ser maior que o posterior para ter prejuico e j < i pois o ano se passa de forma crescente
    if (preco[j] > preco[x] && j < x) {
        //Pega o ano, comecando do zero, que compra e o que revende
        // console.log(`${j} , ${x}`);
        // Calcula os prejuizos de todas as possibilidades de revenda
        // console.log(`${preco[j] - preco[x]}`)
        prejuizoLista.push(preco[j] - preco[x]);
    }
    if (x == tamanhoLista){
        x=0;
        j++;
    }
    if(j>6){
        break;
    }
}
//Lista todos os prejuizos de revenda considerando todas as posibilidades
//console.log(prejuizoLista)

console.log(Math.min(...prejuizoLista));



// for (let i = 0; i < tamanhoLista; i++) {
//     x++;
//     if (preco[j] > preco[i]) {
//         console.log(`${j} , ${i}`);
//     }
//     if (x == tamanhoLista) {
        
//     }
// }

