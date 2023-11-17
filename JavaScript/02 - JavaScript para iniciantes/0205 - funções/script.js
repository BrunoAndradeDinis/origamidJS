console.log("foi") 

// FUNÇÕES
// Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor.

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4

// Chamada de function declaration

// FUNÇÕES
function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7

// Parênteses () executam uma função

// PARÂMETROS E ARGUMENTOS
// Ao criar uma função, você pode definir parâmetros.

// Ao executar uma função, você pode passar argumentos.

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

imc(74, 1.75) // 74 e 1.75 são os argumentos
imc(60, 1.70) // 60 e 1.70 são os argumentos

// Separar por vírgula cada parâmetro. Você pode definir mais de um parâmetro ou nenhum também

// PARÊNTESES EXECUTA A FUNÇÃO
function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}
corFavorita(); // retorna 'Você não gosta de nada'

// Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer

// ARGUMENTOS PODEM SER FUNÇÕES
// Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

addEventListener('click', function() {
  console.log('Clicou');
});
// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

// Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}

// PODE OU NÃO RETORNAR UM VALOR
// Quando não definimos o return, ela irá retornar undefined. O código interno da função é executado normalmente, independente de existir valor de return ou não.

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log("O imc é " + imc);
}
function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

function roda(){
  console.log("Seu imc = " + imc(80, 1.80)) // retorna o imc undefined
  console.log("Seu imc = " + imc2(80, 1.80)) // retorna o imc e undefined
}
roda()

// VALORES RETORNADOS
// Uma função pode retornar qualquer tipo de dado e até outras funções.

function terceiraIdade(idade) {
  if(typeof idade !== 'number') {
    return console.log('Informe a sua idade!');
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

function idoso(idade) {
  console.log(typeof idade)
  if (typeof idade !== 'number'){
    console.log("Por favor, preencha um número!")
    return "Por favor, preencha um número!"
  }
  if(idade >= 60){
    console.log("É um idoso!")
    return true
  } else {
    console.log("Não é idoso ainda!")
  }
}

idoso(58)

// Cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia.

// ESCOPO
// Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
var totalPaises;
function precisoVisitar(paisesVisitados) {
  totalPaises = 193;
  console.log(`Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`)
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
let resposta = precisoVisitar(29)
console.log(resposta)
console.log(totalPaises) // erro, totalPaises não definido
// ESCOPO LÉXICO
// Funções conseguem acessar variáveis que foram criadas no contexto pai

var profissao = 'Frontend Developer';

function dados() {
  var nome = 'Bruno';
  var idade = 27;
  function outrosDados() {
    var endereco = 'Franca-SP';
    var idade = 28;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

resposta = dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
console.log(resposta)
// outrosDados(); // retorna um erro

// HOISTING
// Antes de executar uma função, o JS 'move' todas as funções declaradas para a memória

imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

// EXERCÍCIO
// Crie uma função para verificar se um valor é Truthy
function valida(valorAi){
  if(valorAi) console.log(!!valorAi)
  else console.log(!!valorAi)
}

valida(Math.random() * 100)
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQ (lado) {
  console.log(`O perímetro quadrado é ${lado * 4}`)
}
perimetroQ(34)

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function meuNomeCompleto(nome, midnome, sobrenome){
  console.log(`Meu nome completo: ${nome} ${midnome} ${sobrenome}`)
}
meuNomeCompleto("Bruno", "de Andrade", "Dinis")

// Crie uma função que verifica se um número é par
function parOuImpar(numero){
  if(numero%2 == 1) console.log("É impar")
  else console.log("É par!")
}

parOuImpar(1234567890)


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado){
  console.log(typeof dado)
}

tipoDeDado(25)
tipoDeDado(false)
tipoDeDado(null)
tipoDeDado("teste")


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){meuNomeCompleto("Bruno", "de Andrade", "Dinis")})


// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  console.log(`Ainda faltam ${totalPaises - paisesVisitados} países para visitar`)
}
function jaVisitei(paisesVisitados) {
  console.log(`Já visitei ${paisesVisitados} do total de ${totalPaises} países`)
}
precisoVisitar(20);
jaVisitei(20);