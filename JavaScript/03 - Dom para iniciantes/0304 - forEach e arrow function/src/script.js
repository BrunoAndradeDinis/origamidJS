const imgs = document.querySelectorAll('img');

imgs.forEach(function(item, index, array){
    console.log(item, index, array)
})

imgs.forEach((item, index, array) => {
    console.log("Arrow function", item, array, index)
})
// EXERCICIO
// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p')
paragrafos.forEach((p)=> console.log(p))
// Mostre o texto dos parágrafos no console
paragrafos.forEach((p) => console.log(p.innerHTML))
// Como corrigir os erros abaixo:

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);