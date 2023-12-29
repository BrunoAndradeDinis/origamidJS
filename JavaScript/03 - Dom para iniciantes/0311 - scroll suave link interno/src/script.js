const activeClassName = 'ativo'

// tabNav, ao clicar na imagem faz aparecer o conteúdo relacionado a ela.
function initTabNav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')
  // validação para caso não esteja na página correta. 
  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClassName)
    // função para pegar o index das img e ativar o conteúdo 
    function activeTab(index){
      tabContent.forEach((content) => {
        if(content.classList.contains(activeClassName)) content.classList.remove(activeClassName)
      })
      tabContent[index].classList.toggle(activeClassName)
    }
    // rodando as imagens e ao clicar, pegar o index e ativar a função.
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index)
      })
    })
  }
} initTabNav()

// accordion list, ao clicar na legenda aparece a descrição em baixo.
function initAccord(){
  const accordionList = document.querySelectorAll('.js-accordion dt')
  if(accordionList.length) {
    accordionList[0].classList.add(activeClassName)
    accordionList[0].nextElementSibling.classList.add(activeClassName)

    function activeAccordion(){
      // console.log(this)
      // console.log(this.nextElementSibling)
      this.classList.toggle(activeClassName)
      this.nextElementSibling.classList.toggle(activeClassName)
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    })
  }

} initAccord()

// Scroll suave nos links internos com js
function initScrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

function scrollToSection(evento) {
  evento.preventDefault()

  // aqui pegamos os dados dos links internos e localizamos/apontamos sua respectiva section.
  const href = evento.currentTarget.getAttribute('href')
  const section = document.querySelector(href)
  const topo = section.offsetTop
  
  // aqui levaremos até o local de 3 maneiras
  // 1º maneira, direto ao ponto
  // window.scroll(0, topo)
  
  // 2º maneira, direto ao ponto de maneira suave.
  // window.scroll({
  //   top: topo,
  //   behavior: 'smooth'
  // })
  
  // 3º maneira, 
    section.scrollIntoView({
      behavior: 'smooth', 
      block: 'start'});
}

linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToSection)
  link
})
} initScrollSuave()