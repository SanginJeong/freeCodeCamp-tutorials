const $preloader = document.querySelector('.preloader');
const videoContainer = document.querySelector('.video-container');
window.addEventListener('load',()=>{
  $preloader.classList.add('hide-preloader');
})


const switchBtn = document.querySelector('.switch-btn');

switchBtn.addEventListener('click',()=>{
  if(!switchBtn.classList.contains('slide')){
    switchBtn.classList.add('slide');
    videoContainer.pause();
  }
  else {
    switchBtn.classList.remove('slide');
    videoContainer.play();
  }
})