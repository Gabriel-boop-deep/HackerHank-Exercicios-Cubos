//let caracteresCorrompidos = [ '*', '%' , '!', '@' , '$','&' ,'(' , ')'];

let texto = "Felis) silvestris *catus&",merge='';

let dadosCorrompidos = '*%!@$&()';
//Se ele não encontrar nenhum caractere especial vai retornar -1 então ele pode escrever
for (let i=0;i<texto.length;i++){
   if(dadosCorrompidos.indexOf(texto[i])==-1){
    merge+=texto[i];
   }
}
console.log(merge)