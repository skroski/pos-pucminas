let nomeDoUsuario;
nomeDoUsuario =  "Daniel";
console.log(nomeDoUsuario);

let idade = 50;
console.log(1, idade)

let cansado = true;
console.log (2, cansado);

{
    let nome2 = 'Marcos';
    console.log(3, nome2)
}
// console.log(nome2); //erro

{
    var nome3 = 'Anita';
    console.log(4, nome3)
}
console.log(5, nome3); // var tem escopo global sempre

{
    const PI= 3.14159;
    console.log(6, PI)
    // PI = 3 //erro
}
//console.log (7, PI); // erro