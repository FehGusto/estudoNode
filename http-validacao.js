const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function trataErro(erro) {
    throw new Error(erro.message);
}

async function checkUrl(result) {
    try {
        const arrayStatus = await Promise
        .all(result
         .map(async url => {
            const res = await fetch(url)
            return res.status;
        }))
        return arrayStatus;
    } catch(erro) {
        trataErro(erro);
    }

}

function geraArryaUrl(result) {
   return result
    .map(objetoLink => Object
        .values(objetoLink).join())
}

async function validaUrl(result) {
   const links = geraArryaUrl(result)
   const statusLinks = await checkUrl(links);
   const resultado = result.map((objeto, indice) => ({
       ...objeto, 
       status: statusLinks[indice]
   }))
   return resultado
}



module.exports = validaUrl;