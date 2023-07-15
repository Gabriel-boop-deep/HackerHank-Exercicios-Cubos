// let texto = "Felis) silvestris *catus&";
// let caracteresRuins = "!@#$%&*()";
// texto = texto.replace("%", "");
// let caractere = '';
// for (let letra of texto) {
//     if (letra != '*' && letra != '%' && letra != '!' && letra != '@' && letra != '$' && letra != '&' && letra != '(' && letra != ')') {
//         caractere += letra;
//     }
// }
// console.log(caractere);




function solucao(stringCorrompida) {
    // seu codigo aqui
    let stringCorrompida;
    //let caracteresRuins = "!@#$%&*()";
    let caractere = '';
    for (let letra of stringCorrompida) {
        if (letra != '*' && letra != '%' && letra != '!' && letra != '@' && letra != '$' && letra != '&' && letra != '(' && letra != ')') {
            caractere += letra;
        }
    }
    console.log(caractere);
}

function processData(input) {
    solucao(input);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});