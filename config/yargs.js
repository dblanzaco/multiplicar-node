const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprimir en consola la tabla a multiplicar', opts)
    .command('crear', 'Crear archivo con la tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}