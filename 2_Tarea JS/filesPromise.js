/**
 * Este programa lee 2 archivos de texto
 * usando promesas.
 * 
 * autor: Samuel Labra
 * version: 1.0
 * fecha: 18-08-2023
 */
const fs = require('node:fs');// mod: file system

const myAsyncTask = ()=>{// promise function
    return new Promise((resolve,reject)=>{
        fs.readFile('./f1.txt','utf-8',(err1,t1)=>{// async task
            let txt1 = t1;
            if(!txt1) reject('Something went wrong1');
            else resolve(txt1);
        });
    });
}

// invoke promise function
myAsyncTask()
    .then((txt1)=>{
        console.log('\ntexto1: \n',txt1);
        return new Promise((resolve,reject)=>{
            fs.readFile('./f2.txt','utf-8',(err2,t2)=>{
                let txt2 = t2;
                if(!txt2) reject('Something went wrong2');
                else resolve(txt2);
            });
        })
    })
    .then((txt2)=>console.log('\ntexto2: \n',txt2))
    .catch((err)=>console.log(err));
    // .then(); Es posible encadenar después de un fallo

// other
console.log('__Hola Mundo!__\n');