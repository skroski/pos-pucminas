//Promises
let numero = 20;
fnMetade(numero).then(
    (resp) => console.log(`A metade de ${numero} é ${resp}`),
    (erro) => console.log(erro)
)

function fnMetade(n) {
    return new Promise(function (resolve, reject) {
        if (n % 2 == 0) resolve(n / 2);
        else reject('Este número não é Par')
    })
}
