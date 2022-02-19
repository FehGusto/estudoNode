const chalk = require('chalk');
const cacthArquiv = require('./index.js');
const pegaArquivo = require('./index.js');

const caminho = process.argv;

async function processaTexto(caminhArquivo) {
    const result = await cacthArquiv(caminhArquivo[2]);
    console.log(chalk.yellow('Lista de links'), result);
}

processaTexto(caminho)