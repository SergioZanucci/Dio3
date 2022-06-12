/* Filter, 
filtrar e retornar os numeros pares de uma arry.*/

function filtraPares(arry) {
    return arry.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArry = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArry));

/* Filtrar numeros impares é so trocar em function linha 8,
trocar === por !== */