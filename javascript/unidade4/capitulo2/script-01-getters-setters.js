//getters, setters

let funcionario = {
    prenome: 'José',
    sobrenome: 'Santos',
    salario: 3000,
    nascimento: new Date(1987,10,3),
    get nomeCompleto() {
        return `${this.prenome} ${this.sobrenome}`
    },
    set nomeCompleto(nc) {
        [this.prenome, this.sobrenome] = nc.split(' ');
    },
    set novoSalario(v) {
        if (v < this.salario)
            throw new Error("Salário não pode ser menor que o Atual")
        else this.salario = v;
    },
    get idade(){
        let ano = new Date().getFullYear();
        return ano - this.nascimento.getFullYear();
    }
}
funcionario.nomeCompleto = "Maria Souza"
funcionario.novoSalario = 3000;
console.log(funcionario.idade)
console.log(funcionario)