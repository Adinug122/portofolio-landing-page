window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const scrollTop = document.querySelector('#scrollTop')
  if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed');
    header.classList.remove('absolute')
    scrollTop.classList.add('fixed');
    scrollTop.classList.remove('hidden');
  } else {
    header.classList.remove('navbar-fixed');
    header.classList.add('absolute');
     scrollTop.classList.remove('fixed');
    scrollTop.classList.add('hidden');
  }
});

 

const hamburgerMenu = document.querySelector('#hamburger-menu');
const lines = hamburgerMenu.querySelectorAll('span');
const navbarMenu = document.getElementById('#navbar-menu');

hamburgerMenu.addEventListener('click', (e) => {
  e.stopPropagation(); 
  lines[0].classList.toggle('hamburger-click-1-open');
  lines[1].classList.toggle('hamburger-click-2-open');
  lines[2].classList.toggle('hamburger-click-3-open');
  navbarMenu.classList.toggle('hidden');
});

window.addEventListener('click', (e) => {
  if (!navbarMenu.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    lines[0].classList.remove('hamburger-click-1-open');
    lines[1].classList.remove('hamburger-click-2-open');
    lines[2].classList.remove('hamburger-click-3-open');
    navbarMenu.classList.add('hidden');
  }
});

// darkmode

const html = document.querySelector('html');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', ()=>{
  if(toggle.checked){
    html.classList.add('dark');
  }else{
    html.classList.remove('dark');
  }
})
