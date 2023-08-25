/**
 * Este programa lee 5 archivos de texto
 * usando promise.any()
 * 
 * autor: Samuel Labra
 * version: 1.0
 * fecha: 23-08-2023
 */
const fs = require('node:fs');// file system module

/* ** Functions ** */
const readArchive = (n)=>{// read archive function
    return new Promise((resolve,reject)=>{
        fs.readFile(`./f${n}.txt`,'utf-8',(err,file)=>{
            let txt = file;
            if(!txt) reject(`Something went wrong${n}`);
            else resolve(txt);
        });
    });
}

/* ** Main ** */
let arrayPromises = [];
let i = 1;

while(i<=5){// add promises to array
    arrayPromises.push(readArchive(i));
    i++;
}

Promise.any(arrayPromises)// first fullfilled promise
    .then((value)=>{
        console.log(value);
    })
    .catch((err)=>console.log(err));