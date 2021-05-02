// this
fn()
c = 3;
console.log(1, this);
let a = 1;
const b = 2;
var c;
this.d = 4;

function fn() {
    console.log(2, this)
}

console.log(3, this)

console.log(4, c)


// let pessoa = {
//     nome: 'Daniel',
//     fn: function () {
//         console.log(this)
//     }
// }
// pessoa.fn()

class Pessoa {
    constructor(n){
        this.nome = n;
    }
    fn(n) {
       let self = this
    //    let f = function() {
    //        console.log(2, self)
    //    }
    //    f();
    setTimeout(function(){
        self.nome = n;
        console.log(2,self)
    }, 1000);
    }
}
let pessoa = new Pessoa('João');
pessoa.fn('Pedro')

