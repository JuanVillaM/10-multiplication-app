const argv = require('./config/yargs').argv;

const colors = require('colors');

const { toList, createFile } = require('./multiplication/multiplication');

let command = argv._[0];

switch (command) {
    case 'list':
        toList(argv.base, argv.limit);
        break;

    case 'create':
        createFile(argv.base, argv.limit).catch(err => console.log(err));
        break;

    default:
        console.log('Command not recognized');
}