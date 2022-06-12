/*Reduce...somar todos os numeros de uma arry.*/

function somaNumeros(arry) {
    return arry.reduce(function (prev, current) {
        console.log({ prev });
        console.log({ current });
        return prev + current;
    }, 0);
}

const arry = [1, 2];

console.log(somaNumeros(arry)); 



