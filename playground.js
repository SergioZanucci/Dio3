/*Map...praticando sintaxe e multiplicação de numeros, 
utilizando o parametro this de um objeto, 
depois sem o parametro this.*/

const mamao = {
    value: 2,
}

const melancia = {
    value: 3,
}

function MapComThis(arry, thisArg) {
    return arry.map(function(item){
        return item * this. value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> mamão', MapComThis(nums, mamao));

console.log('this -> melancia', MapComThis(nums, melancia));