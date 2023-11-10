var lista_de_compras=['Maça','Banana','Pera','Uva'];
var primeiro_item = lista_de_compras[0];
var segundo_item = lista_de_compras[1]
var terceiro_item = lista_de_compras[2]

var posição = lista_de_compras.indexOf('Uva');

var tamanho = lista_de_compras.length

var ultimo = lista_de_compras[lista_de_compras.length-1];

document.write(tamanho + '<br>' + ultimo + '<br>' + posição + '<br>')

//Adcionar algo a lista final
lista_de_compras.push('Laranja')

//Adcionar algo a lista inicio
lista_de_compras.unshift('Morango')

//Remover elemento do inicio
lista_de_compras.shift();

//Remover elemento do final
lista_de_compras.pop();

document.write(lista_de_compras + '<br>')

//Pecorrer elementos 
//for (var i = 4; i < lista_de_compras.length; i++) {
//    document.write(lista_de_compras[i]);
//}
//
//
//for (i in lista_de_compras) {
//    document.write(lista_de_compras[i]);
//}

//Ultilizando função
lista_de_compras.forEach(function (item, indice) {
    document.write(item, indice);
})