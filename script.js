let isTrueOpen = true

function toogleMenu(){
  const open = document.getElementById("open")
  const close = document.getElementById("close")
  const main = document.getElementById('main')
  const navMobile = document.getElementById('nav-mobile')
  const body = document.getElementById('body')

  if(isTrueOpen) {
    open.style.display = 'none'
    close.style.display = 'block'
    main.style.display = 'none'
    body.style.backgroundImage = 'none'
    navMobile.style.display = 'flex'
    isTrueOpen = false
  } else {
    open.style.display = 'block'
    close.style.display = 'none'
    main.style.display = 'flex'
    body.style.backgroundImage = 'url(./assets/blur-mobile.png)'
    navMobile.style.display = 'none'
    isTrueOpen = true
  }

}