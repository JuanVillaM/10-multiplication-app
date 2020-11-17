const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }

};

const argv = require('yargs')
    .command('list', 'Print the multiplication table in console', options)
    .command('create', 'Generates a file with the multiplication table', options)
    .help()
    .argv;

module.exports = {
    argv
};