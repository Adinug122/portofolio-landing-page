window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed');
    header.classList.remove('absolute')
  } else {
    header.classList.remove('navbar-fixed');
    header.classList.add('absolute');
  }
});



const hamburgerMenu = document.querySelector('#hamburger-menu');
const lines = hamburgerMenu.querySelectorAll('span');
const navbarMenu = document.getElementById('#navbar-menu')
hamburgerMenu.addEventListener('click', () => {
  lines[0].classList.toggle('hamburger-click-1-open');
  lines[1].classList.toggle('hamburger-click-2-open');
  lines[2].classList.toggle('hamburger-click-3-open');

  navbarMenu.classList.toggle('hidden');

});

