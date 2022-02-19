const chalk = require('chalk');
const cacthArquiv = require('./index.js');
const validaUrls = require('./http-validacao')

const caminho = process.argv;

async function processaTexto(caminhArquivo) {
    const result = await cacthArquiv(caminhArquivo[2]);
    if (caminho[3] === 'validar') {
        console.log(chalk.yellow('Link Validos'), await validaUrls(result));
    } else {
        console.log(chalk.yellow('Lista de links'), result);
    }
}

processaTexto(caminho)