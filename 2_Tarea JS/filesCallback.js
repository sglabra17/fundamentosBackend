/**
 * Este programa lee 2 archivos de texto
 * usando callbacks.
 * 
 * autor: Samuel Labra
 * version: 1.0
 * fecha: 18-08-2023
 */
const fs = require('node:fs');// file system module

const readTwoFiles = (readFile1, readFile2)=>{// receives 2 callbacks
    readFile1(readFile2);// 1st callback receives 1 callback
}

const readFile1 = (readFile2)=>{//callback1
    fs.readFile('./f1.txt','utf-8',(err1,t1)=>{
        console.log('\narchivo 1: \n',t1);
    });// asynchronous reading
    
    readFile2();
}

const readFile2 = ()=>{//callback2
    // synchronous reading
    const t2 = fs.readFileSync('./f2.txt','utf-8');
    console.log('\narchivo 2: \n',t2);
}

readTwoFiles(readFile1,readFile2);// invoke function

console.log('\nFin del programa...');