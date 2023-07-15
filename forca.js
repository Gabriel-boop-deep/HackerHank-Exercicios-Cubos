let palavra = 'abelha',palpite = 'a',cont = 0;
for( let i = 0; i<palavra.length; i++){
    if (palavra[i]===palpite){
        cont++;
    }
}
console.log(cont);