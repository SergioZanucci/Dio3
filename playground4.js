/*Função que recebe uma lista de preço e um numero, 
represente o saldo disponivel.
Calcular qual será o saldo final.
ubtrair todos os preços da lista enviadaS.*/

const lista = [
    {
     nome: 'sabao em po',
     preco: 30,
    }, 
    {
     nome: 'cereal',
     preco: 20,
    },
    {
     nome: 'toalha',
     preco: 30,
    },
 ];
 
 const saldoDisponivel = 100;
 
 function calculaSaldo(saldoDisponivel, lista) {
     return lista.reduce(function(prev, current, index) {
         console.log("rodada", index + 1);
         console.log({ prev });
         console.log({ current});
         return prev - current.preco;
     }, saldoDisponivel);
 }
 
 console.log(calculaSaldo(saldoDisponivel, lista));