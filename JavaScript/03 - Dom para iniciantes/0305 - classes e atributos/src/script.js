// CLASSLIST
// Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');

// ATTRIBUTES
// Retorna uma array-like com os atributos do elemento.

var animais = document.querySelector('.animais');

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

// GETATTRIBUTE E SETATTRIBUTE
// Métodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelectorAll('img');

img[0].getAttribute('src'); // valor do src
img[0].hasAttribute('id'); // true / false
img[0].removeAttribute('alt'); // remove o alt

img[0].setAttribute('alt', 'Texto Alternativo'); // muda o alt
img[0].hasAttributes(); // true / false se tem algum atributo

// É muito comum métodos de get e set;

// READ ONLY VS WRITABLE
// Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.


animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only

// Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''

// EXERCÍCIO
// Adicione a classe ativo a todos os itens do menu
const menuItens = document.querySelectorAll('.menu a')
menuItens.forEach((item) => item.classList.toggle('ativo') )
menuItens[0].classList.add('ativo')
console.log(menuItens)
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItens.forEach((item) => item.classList.toggle('ativo') )
menuItens[0].classList.add('ativo')
console.log(menuItens)
// Verifique se as imagens possuem o atributo alt
img.forEach((image) => console.log(image.hasAttribute('alt')))
// Modifique o href do link externo no menu
menuItens.forEach((item) => {
  console.log(item.href)

  if(item.href == document.querySelector('a[href^="http"')) {
    console.log('O item', item ,'É um link externo!')
    item.setAttribute('href', '#origamid')
  }

})