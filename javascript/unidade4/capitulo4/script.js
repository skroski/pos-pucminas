// (function mensagens() {
//     console.log('Mensagem do Log')
//     console.info('Mensagem do Log')
//     console.debug('Mensagem do Debug')
//     console.warn('Mensagem do Warn')
//     console.error('Mensagem do Erro2')
// })()

// console.log('%cOlá %s. Hoje [e dia %d', 'color:red; font-size: 2em; background-color: orange;', 'Daniel', 30)

// let produtos = [
//     { nome: 'TV', preco: 1732.8},
//     { nome: 'Geladeira', preco: 2732.8},
//     { nome: 'Computador', preco: 5732.8},
//     {apelido: 'Apple', preco: 10833.3}
// ]

// console.table(produtos)

// console.count('a')
// console.count('a')
// console.count('a')
// console.count('b')
// console.count('b')

output.innerHTML = `
    <p>
        <input type="text" id="nome">
        <button id="btn">Ok</button>
    </p>
    <p id="resultado"></p>
`;
btn.onclick = () => {
    let hoje = new Date();
    let horas = hoje.getHours();
    let mensagem = '';
    if (horas < 12)
        mensagem += 'Bom dia,';
    else if (horas < 18)
        mensagem += 'Boa Tarde, '
    else
        mensagem += 'Boa Noite, '
    mensagem += getNome();
    resultado.innerHTML = mensagem;
}
function getNome() {
    return nome.value;
    
}