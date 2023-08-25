/**
 * Este programa lee 5 archivos de texto
 * usando Promise.all()
 * 
 * autor: Samuel Labra  
 * version: 1.0
 * fecha: 23-08-2023
 */

/* ** Modules ** */
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

Promise.all(arrayPromises)// evaluate all promises
    .then((values)=>{
        values.forEach((itm,indx)=>{
            console.log(`\nFile ${indx+1}:\n${itm}\n`);
        });
    })
    .catch((err)=>console.log(err));