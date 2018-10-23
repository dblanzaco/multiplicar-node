//requireds
const fs = require('fs'); /** Requireds de node JS */
//const express = require('express'); /** Requireds que extienden a node JS, y se instalan a través del gesto de paquetes npm */
//const file = require('./folder'); /** Requireds utilizados para usar otros ficheros de la ruta indicada */
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('====================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('====================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${ base * i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${ base * i}\n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}