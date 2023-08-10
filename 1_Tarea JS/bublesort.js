/**
 * Este programa realiza el ordenamiento
 * de un arreglo usando el método de burbuja.
 * 
 * autor: samuel labra
 * fecha: 10-08-2023
 * versión: 1.0
 */

// main
let array = [ 5, 1, 4, 3, 2 ];
let arrayLen = array.length;
console.log('arreglo desordenado: ',array);

// buble sort
let swapped = false;

for(let i = 1; i < arrayLen; i++){
    for(let j = 0; j < arrayLen-i; j++){
        if( array[j] > array[j+1] ){
            let aux    = array[j];
            array[j]   = array[j+1];
            array[j+1] = aux;
            swapped = true;
        }
    }
    if(!swapped){break;}
    cambio = false;
}

// ordered array
console.log('arreglo ordenado: ',array);

