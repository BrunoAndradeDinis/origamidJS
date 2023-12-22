
// OUTERHTML, INNERHTML E INNERTEXT
// Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.

const menu = document.querySelector('.menu');
const cloneMenu = menu.cloneNode(true)

menu.outerHTML; // todo o html do elemento
console.log(menu.outerHTML)
menu.innerHTML; // html interno
console.log(menu.innerHTML)
menu.innerText; // texto, sem tags
console.log(menu.innerText)

menu.innerText = '<p>Texto</p>'; // a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada

// TRASVERSING
// Como navegar pelo DOM, utilizando suas propriedades e métodos.

const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho
console.log(lista.children[--lista.children.length]);
console.log(lista.querySelector("li:last-child"));

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho

// ELEMENT VS NODE
// Element's represetam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.


console.log(lista.childNodes)
lista.previousElementSibling; // elemento acima
lista.previousSibling; // node acima

lista.firstChild; // primeiro node child
lista.childNodes; // todos os node child

// Geralmente estamos atrás de um elemento e não de qualquer node em si.

// MANIPULANDO ELEMENTOS
// É possível mover elementos no dom com métodos de Node.

const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista); // move lista para o final de contato
contato.insertBefore(lista, titulo); // insere a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
// contato.replaceChild(lista, titulo); // substitui titulo por lista

// NOVOS ELEMENTOS
// Podemos criar novos elementos com o método createElement()

const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo Título';
novoH1.classList.add('titulo');

animais.appendChild(novoH1);

// CLONAR ELEMENTOS
// Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()

// const titulo = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo;
// titulo, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo.cloneNode(true);
// const contato = document.querySelector('.contato');
contato.appendChild(cloneTitulo);

// true sinaliza para incluir os filhos

// EXERCÍCIO
// Duplique o menu e adicione ele em copy
// const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

// const cloneMenu = menu.cloneNode(true)

copy.appendChild(cloneMenu)
// Selecione o primeiro DT da dl de Faq
const faqui = document.querySelector('.faq')
const primeiroDt = document.querySelector('dt')

// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDt.nextElementSibling
console.log(proximoDD)

// Substitua o conteúdo html de .faq pelo de .animais
const animais2 = document.querySelector('.animais')
faqui.innerHTML = animais2.innerHTML