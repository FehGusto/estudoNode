const chalk = require('chalk');
const fs = require('fs');

function tratErro(erro) {
  throw new Error(chalk.red(erro.code, 'Não existe'));
}

function cacthArquiv(caminhArquivo) {
  const enconding = 'utf-8'
  fs.readFile(caminhArquivo, enconding, (erro, texto) => {
    if(erro) {
      tratErro(erro)
    }
    console.log(chalk.green(texto));
  })
}
cacthArquiv('./arquivos/texto1.md')