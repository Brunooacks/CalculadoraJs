// while e movido a condicao , quando a mesma for verdadeira 
//var i = 0;
//while(i <= 10){
//    console.log( i + 'porque i e menor que 10.');
//    i++;
//}
//for(var i = 0 ; i < 10; i++) {
//    console.log(i + 'porque i e menor que 10')
//}
// foreach para interar um array de dados ou informacoes : objetos , strings ou numeros 

var numeros = [1,2,3,4,5,6,7]
numeros.forEach(function(valor,posicao){
    console.log(valor + 'na posicao ' + posicao )
})