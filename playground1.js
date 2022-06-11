/* Função sem this. */


function MapSemThis(arry, thisArg) {
    return arry.map(function(item){
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10]

console.log(MapSemThis(nums));

console.log(nums);