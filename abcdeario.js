// "letra": "m",
// "palavras": [
//   "mamao",
//   "maca",
//   "melao",
//   "melancia",
//   "laranja"

let letra = 'm';
let contador = 0;
let palavras = ["mamao", "maca", "melao", "melancia", "laranja", 'beterraba'];
for (let verificador of palavras) {
    if (verificador[0] != letra) {
        contador++;
    }
}
console.log(contador);