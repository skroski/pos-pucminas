//closure

// function criaContador() {

//     let n= 0;
//     return function () {
//        console.log(n++) 
//     }
// }

// let contador1 = criaContador();
// contador1()
// contador1()
// contador1()
// contador1()
// contador1()


// function digaOla(idioma) {
//     return function (nome) {
//         switch (idioma) {
//             case 'es':
//                 console.log(`Hola ${nome}`);
//                 break;
//             case 'en':
//                 console.log(`Hello ${nome}`);
//                 break;
//             default:
//                 console.log(`Olá ${nome}`)
//                 break;

//         }

//     }
// }

// let ola = digaOla('es');

// ola('José');

// function criaContador() {
//     let n = 0;
//     function altera(v) {
//         n+=v;
//     };
//     return {
//         incrementa: function () {
//             altera(1);
//         },
//         decrementa: function () {
//             altera(-1);
//         },
//         valor: function () {
//             return n;
//         }

//     }
// }
// let contador1 = criaContador()
// let contador2 = criaContador()
// contador1.incrementa(); console.log(contador1.valor())
// contador1.incrementa(); console.log(contador1.valor())
// contador1.decrementa(); console.log(contador1.valor())
// contador2.incrementa(); console.log(contador1.valor())
// contador2.incrementa(); console.log(contador1.valor())

function criaFuncoes() {
    let funcoes = [];
    for (i=0; i < 3; i++) {
        let j = i;
        funcoes.push(function() {
            console.log(j)
        });
    }
    return funcoes
}
let fn = criaFuncoes();
fn[0]();
fn[1]();
fn[2]();