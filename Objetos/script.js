var pessoa = {
    nome: 'Luís',
    idade: 19
}

var quadrado = {
    lados: 4,
    area(lado) {
        console.log(this);
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log('Exercicios .......................................');

//1
var dadosPessoais = {
    nome: 'Luís Gustavo',
    sobrenome: 'Tranquilino Barbosa',
    idade: 19
}

//2
dadosPessoais.nomeCompleto = function() {
    console.log(`${this.nome} ${this.sobrenome}`);
}

//3
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi'
}

carro.preco = 3000;

//4
var cachorro = {
    raca: 'labrador',
    cor: 'preto',
    idade: 10,
    obs: 'late ao ver um homem'
}