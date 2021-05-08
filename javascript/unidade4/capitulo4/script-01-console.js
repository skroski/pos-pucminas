(function mensagens() {
    console.log('Mensagem do Log')
    console.info('Mensagem do Log')
    console.debug('Mensagem do Debug')
    console.warn('Mensagem do Warn')
    console.error('Mensagem do Erro2')
})()

console.log('%cOlá %s. Hoje [e dia %d', 'color:red; font-size: 2em; background-color: orange;', 'Daniel', 30)

let produtos = [
    { nome: 'TV', preco: 1732.8},
    { nome: 'Geladeira', preco: 2732.8},
    { nome: 'Computador', preco: 5732.8},
    {apelido: 'Apple', preco: 10833.3}
]

console.table(produtos)

console.count('a')
console.count('a')
console.count('a')
console.count('b')
console.count('b')

