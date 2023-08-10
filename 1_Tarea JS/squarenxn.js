/**
 * Este programa imprime una serie de 
 * números del 5 al 1, y del 1 al 5,
 * cada número repetido 5 veces.
 * 
 * autor: samuel labra.
 * fecha: 10-08-2023
 * version: 1.0
 */

// square nxn
let str1 = '';

// descendente
for(let num = 5; num > 0; num--){
    for(let veces = 5; veces > 0; veces--){
        str1 = str1.concat(num);
    }
    str1 = num!=1 ? str1.concat('\n') : str1;
}

let str1Array = str1.split('\n');
let indxDesc  = str1Array.length - 2;// 22222

// ascendente
for(let indx = indxDesc; indx >= 0; indx--){
    str1 = str1.concat('\n'+str1Array[indx]);
}

// resultado
console.log('\n');
console.log(str1);
console.log('\n');