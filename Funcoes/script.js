function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(2));

function imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(80, 1.95));

function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Eu gosto do céu';
    }
    else if (cor === 'verde') {
        return 'Eu gosto de grama';
    }
    else {
        return 'Eu não gosto de cores';
    }
}

corFavorita();

addEventListener('click', function() {
    console.log('oi');
});

function terceiraIdade(idade) {
    if(idade >= 60) {
        return true;
    } else {
        return false;
    }
}

console.log(terceiraIdade(65));

//Exercicios 
console.log('Exercicios -------------------------------')

//1
function valorIsTrue(valor) {
    if(valor) {
        console.log('O valor é truthy');
    } else {
        console.log('O valor não é Truthy');
    }
}

//2 
function calcPerimetro(lado) {
    perimetro = lado * 4;
    return perimetro;
}

//3 
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

//4
function isPar(numero) {
    if(numero % 2 === 0) {
        console.log('O número é par');
    } else {
        console.log('o número é impar');
    }
}

//5
function whatData(dado) {
    console.log(typeof(dado));
}

//6
addEventListener('scroll', function() {
    console.log('Luís Gustavo');
})