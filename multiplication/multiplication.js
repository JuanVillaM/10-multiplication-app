// requireds
const fs = require('fs');

const colors = require('colors/safe');

let toList = (base, limit = 10) => {
    console.log('==============='.green);
    console.log(`Table of ${base}`.green);
    console.log('==============='.green);
    for (let i = 1; i <= limit; i++) {
        console.log(`${base} x ${i} = ${base * i}\n`);
    }
}

let createFile = (base, limit = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`The value of ${base} is not a number`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tables/table-${base}-to-${limit}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(console.log(`File created:`, colors.green(`table ${base}-to-${limit}.txt`)));

        });

    });

};

module.exports = {
    toList,
    createFile
};