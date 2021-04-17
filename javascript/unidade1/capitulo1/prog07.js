let musica = {};

console.log(1, musica);

musica.nome = "The Unforgiven";
musica.artista = 'Mettalica';
musica.segundos = '600'
console.log(2, musica);

console.log(3, musica.artista);
console.log(4, musica['artista'])


let usuario = {
    nome: 'João',
    idade: 35,
}
for (let chave in usuario) 
{ 
    //console.log(usuario[chave]);
    console.log(`${chave} = ${usuario[chave]}`)
}
let joao = usuario;
let maria = {};
for(let chave in joao){
    maria[chave] = joao[chave]
}
maria.nome = 'Maria'
maria.sobrenome = 'Santos';


function mudaNome(obj) {
    obj.nome = 'Heleno'
}
console.log(joao);
console.log(maria);

mudaNome(joao);
console.log(joao);

//função construtura de objetos
function Usuario(nome, idade) {
    
    this.nome = nome;
    this.idade = idade;
    this.maiorIdade = function () {
        return this.idade >= 18;
    }
}
function criarUsuario(nome, idade) {
    return {
        nome: nome,
        idade: idade,
        maiorIdade: function () {
          return this.idade >= 18;
        }
    }
}

let jose = criarUsuario ('José', 40);
let mara = criarUsuario('Mara', 14);




class User {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    maiorIdade(){
        return this.idade >=18;
    }
}

let jose2 = new Usuario ('José 2', 28)

console.log(jose2);
console.log(jose2.maiorIdade())


let jose3 =  new User ('José 3', 12);
console.log(jose3)
console.log(jose3.maiorIdade())