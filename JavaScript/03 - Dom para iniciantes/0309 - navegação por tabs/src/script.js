const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')
// validação para caso não esteja na página correta. 
if(tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('ativo')
  // função para pegar o index das img e ativar o conteúdo 
  function activeTab(index){
    tabContent.forEach((content) => {
      if(content.classList.contains('ativo')) content.classList.remove('ativo')
    })
    tabContent[index].classList.toggle('ativo')
  }
  // rodando as imagens e ao clicar, pegar o index e ativar a função.
  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index)
    })
  })
}