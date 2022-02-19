const chalk = require('chalk');
const fs = require('fs');

function extraiText(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const result = [];
  let temp;
  while((temp = regex.exec(texto)) !== null) {
    result.push({ [temp[1]]: temp[2] })
  }
  return result;
}

function tratErro(erro) {
  throw new Error(chalk.red(erro.code, 'Não existe'));
}

async function cacthArquiv(caminhArquivo) {
  const enconding = 'utf-8'
  try {
    const texto = await fs.promises.readFile(caminhArquivo, enconding)
    console.log(extraiText(texto))
  } catch(erro) {
    tratErro(erro);
  }
}


//function cacthArquiv(caminhArquivo) {
//  const enconding = 'utf-8'
//  fs.promises.readFile(caminhArquivo, enconding)
//  .then((texto) => chalk.green(console.log(texto)))
//  .catch((erro) => chalk.red(tratErro(erro)))
//}

//function cacthArquiv(caminhArquivo) {
//  const enconding = 'utf-8'
//  fs.readFile(caminhArquivo, enconding, (erro, texto) => {
//    if(erro) {
//      tratErro(erro)
//    }
//    console.log(chalk.green(texto));
//  })
//}

cacthArquiv('./arquivos/texto1.md')