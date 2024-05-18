const body = document.getElementById('body')
const header = document.getElementById('header')
const playButton = document.getElementById('playButton')
const video = document.getElementById('videoOverlayTrailer')
// const videoTrailerYt = document.getElementById('videoTrailerYt')

// playButton.addEventListener('click', function() { // show trailer video
//   // videoTrailerYt.style.display = 'block'
//   document.querySelector('.video__yt').classList.add('blackout')
//   body.style.overflowY = 'hidden'
//   video.style.display = 'none'
//   playButton.style.display = 'none'
//   header.style.display = 'none'
// })

const closeButton = document.getElementById('closeButton')
// const body = document.getElementById('body')
// const header = document.getElementById('header')
// const playButton = document.getElementById('playButton')
// const video = document.getElementById('videoOverlayTrailer')
// const videoTrailerYt = document.getElementById('videoTrailerYt')

// closeButton.addEventListener('click', function() { //close trailer video
//   // videoTrailerYt.style.display = 'none'
//   document.querySelector('.video__yt').classList.remove('blackout')
//   // body.style.backgroundColor = '#fff'
//   body.style.overflowY ='scroll'
//   video.style.display = 'block'
//   playButton.style.display = 'flex'
//   header.style.display = 'inline-flex'
// })

const scrollThreshold = 200
const arrowDown = document.getElementById("arrowDownWelcome")
const welcomePage = document.querySelector('.welcome__page')
// const header = document.getElementById('header')

function handleScroll() {
  if (window.scrollY > scrollThreshold) {
    welcomePage.classList.add('scrolled')
    header.classList.add('header_scroll')
    // arrowDown.style.color = '#023047'
    // arrowDown.style.opacity = '0'
    
    arrowDown.style.display = 'none'

  } else {
    welcomePage.classList.remove('scrolled')
    header.classList.remove('header_scroll')
    // arrowDown.style.color = '#fff'
    // arrowDown.style.opacity = '1'
  
    arrowDown.style.display = 'flex'
  }

}

window.addEventListener('scroll', handleScroll);
