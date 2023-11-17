// Todos são primitivos exceto os objetos.

var nome = 'Bruno' // String
var idade = 27 // Number
var possuiFaculdade = true // Boolean
var time; // Undefined
var comida = null // Null
var simbolo = Symbol(); // Symbol
var novoObjeto = new Object(), outroObjeto = {}; // Object

console.log(nome)
console.log(typeof nome)
console.log(idade)
console.log(typeof idade)
console.log(possuiFaculdade)
console.log(typeof possuiFaculdade)
console.log(simbolo)
console.log(typeof simbolo)

var sobrenome = " de Andrade"
var nomeCompleto = nome + sobrenome

console.log(nomeCompleto)

var gols = 1000
var frase = "Romário fez " + gols + ' gols'
console.log(frase)

var ano = '2023'
var mes = 8
console.log(ano + mes)
console.log(typeof ano, typeof mes)

var frase1 = 'Esse é o "\'melhor\'" jogo'
console.log(frase1)

var frase2 = `Romário fez ${gols * 23} gols!`
console.log(frase2)

// Declare uma variável contendo uma string
// Verifique o tipo da variável que contém o seu nome
nome = "Brinu"
console.log(nome, typeof nome)
// Declare uma variável contendo um número dentro de uma string
let numerinho = "13049"
console.log(numerinho, typeof numerinho)
// Declare uma variável com a sua idade
let idadeAtual = 28
console.log(idadeAtual, typeof idadeAtual)
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
let primeironome = "Bruno", sobreNome = "de Andrade"

console.log(`${primeironome} ${sobreNome}`)

// Coloque a seguinte frase em uma variável: It's time
let horaDuSHOW = "It's time!"
console.log(horaDuSHOW)


