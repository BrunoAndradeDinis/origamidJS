const animais = document.getElementById('animais')
console.log(animais)
const gridsection = document.getElementsByClassName('grid-section')
const uls = document.getElementsByTagName('ul')
console.log(uls)

const primeirali = document.querySelector('li')
console.log('Primeira li: ', primeirali)
const primeiraul = document.querySelector('ul')
console.log('Primeira ul: ', primeiraul)

const linkinterno = document.querySelector('[href^="#"]')
console.log('Primeiro LInk interno: ', linkinterno)

const animaisImg = document.querySelectorAll('.animais img')
console.log(animaisImg)

const gridhtml = document.getElementsByClassName('grid-section')
const gridnode = document.querySelectorAll('.grid-section')

// primeiraul.classList.add('grid-section')
console.log(gridhtml) // nesse  aqui vai mostrar o item que foi adicionado a classlist nova || htmlCollection
console.log(gridnode) // nesse não || nodelist

// Retorne no console todas as imagens do site
const imgs = document.querySelectorAll('img')
console.log(imgs)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgsImagem = document.querySelectorAll('img[src^="img/imagem"]')
console.log('As que tem o nome imagem: ', imgsImagem)

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll("[href^='#'")
console.table('Links internos', linksInternos)

// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector('.animais-descricao h2')
console.log(h2)

// Selecione o último p do site
const todosP = document.querySelectorAll('p')

const ultimoP = todosP[todosP.length - 1 ]
console.log(ultimoP)