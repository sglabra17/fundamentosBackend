/**
 * Este programa imprime un mensaje en consola
 * que muestra si una palabra es palindroma o no.
 * 
 * autor: samuel labra
 * fecha: 10-08-2023
 * versión: 1.0
 */

// this function returns if word is palindrome
const isPalindrome = (word)=>{
    let wordLength = word.length - 1;
    let c = 0;

    for(let i = wordLength; i >= (wordLength/2) ; i--){
        if(word[c] != word[i]){
            return false;
        }
        c++;
    }

    return true;
}

// this function removes spaces 
const cleanWord = (word)=>{
    return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .split('').map(c=> c = c!=' ' ? c : '')
    .join('').toLowerCase();
}

// main
let word = cleanWord('Adán no cede con Eva y Yavé no cede con nada');

console.log('Palabra: ', word);
console.log('Longitud: ',word.length);
let esPalindroma = isPalindrome(word);
console.log(esPalindroma ? 'Si' : 'No','es palindroma');






