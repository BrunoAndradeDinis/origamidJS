// OBJETOS
// Conjunto de variáveis e funções, que são chamadas de propriedades e métodos.

var pessoa = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}

pessoa.nome; // 'André'
pessoa.possuiFaculdade; // true

// Propriedades e métodos consistem em nome (chave) e valor

// MÉTODOS
// É uma propriedade que possui uma função no local do seu valor.

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  }
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

// MÉTODOS
// Abreviação de area: function() {} para area() {}, no ES6+

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}

// ORGANIZAR O CÓDIGO
// Objetos servem para organizar o código em pequenas partes reutilizáveis.

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

// Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método?

// CRIAR UM OBJETO
// Um objeto é criado utilizando as chaves {}

var carro = {};
var pessoa = {};

console.log(typeof carro); // 'object'

// DOT NOTATION GET
// Acesse propriedades de um objeto utilizando o ponto .

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

var bg = menu.backgroundColor; // '#84E'

// DOT NOTATION SET
// Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

menu.backgroundColor = '#FFF';
console.log(menu.backgroundColor); // '#FFF'

// ADICIONAR PROPRIEDADES E MÉTODOS
// Basta adicionar um novo nome e definir o valor.

var menu = {
  width: 800,
}

menu.height = 50;
menu.position = 'fixed';

// PALAVRA-CHAVE THIS
// this irá fazer uma referência ao próprio objeto.

var height = 120;
var menu = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu.metadeHeight(); // 25
// sem o this, seria 60

// this irá retornar o próprio objeto

// PROTÓTIPO E HERANÇA
// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

var menu = {
  width: 800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false

// hasOwnProperty é um método de Object

// EXERCÍCIO
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
let bruno = {
    'nome': "Bruno de Andrade",
    'sobrenome': "Dinis",
    'idade': 27,
    'cidade': "Franca",
    'profissao': "Frontend DEV",
    possuiGraduacao: false
}
// Crie um método no objeto anterior, que mostre o seu nome completo
bruno.nomeCompleto = function() {
  return `Nome completo: ${this.nome + this.sobrenome}, idade: ${this.idade}, profissão: ${this.profissao}`
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var labrador = {
  cor: "Preto",
  idade: 10,
  latir(pessoa){
    if(pessoa == 'homem') {
      return "Latir"
    } else {
      return "Nada"
    }
  }
}
