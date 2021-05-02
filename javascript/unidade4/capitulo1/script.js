// output.innerHTML = ''

// let a;
// let x = -10
// try {
//     if (x < 0)
//         throw new Error("Valor não pode ser negativo");
//     a = x;
//     output.innerHTML = `<p>A = ${a} </p>`

// } catch (erro) {
//     output.innerHTML = `<p>Valor de A não pode ser calculado. <br> ${erro.message} </p>`
//     console.log(erro.name);
//     console.log(erro.message);
//     console.log(erro.stack)
// } finally {
//     console.log('fim')
// }

// let numeros = [1, 2, 3, 4];
// let maisNumeros = [...numeros, 5, 6];

// console.log(maisNumeros)

// let obj1 = { nome: 'Jose Santo', idade: 34 };
// let obj2 = obj1;

// let clone1 = { ...obj1 }

// obj1.nome = 'Maria Souza'
// console.log(clone1.nome)
// console.log(obj1.nome)


// let mat = { matricula: 1234, curso: 'Web' };

// let aluno = { ...obj1, ...mat };
// console.log(aluno)

// let funcionario = { ...obj2, salario: 3500 }
// console.log(funcionario)


// function soma() {
//     let valores = [...arguments];
//     return valores.reduce( (total, i) => {
//        return total += i;
//     })
// }

// console.log(3, soma(1, 2, 3, 4, 5))


// let nomeCompleto = 'Jose Santos';
// let pessoa = {};
// [pessoa.prenome, pessoa.sobrenome] = nomeCompleto.split(' ');
// console.log(pessoa)

// let pessoa = {
//     nome: 'Josuel Flores',
//     idade: 25
// }

// for (let [chave, valor] of Object.entries(pessoa))
// console.log(`${chave} = ${valor}`)

// let numeros = [1, 2, 3, 4, 5];

// let [primeiro, segundo, ...resto] = numeros;
// console.log(resto)

let pessoa = {
    nomeCompleto: 'Josuel Flores',
    idade: 25,
    salario: 4000
}

// function ola({ nome }) {
//     console.log(`Olá ${nome}`)

// }

// let { nome, idade } = pessoa;

// console.log(nome)
// console.log(idade)

//ola(pessoa)

let{nomeCompleto: nome, ...resto} = pessoa;
console.log(nome);
console.log(resto)