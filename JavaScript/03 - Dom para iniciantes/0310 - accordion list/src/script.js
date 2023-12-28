const activeClassName = 'ativo'

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