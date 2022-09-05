let menuElements = document.querySelectorAll('.page-header  .navigation-menu a');
let sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  if(window.scrollY >= 0 && window.scrollY < sections[1].offsetTop - 200) {
    menuElements[0].classList.add('active');
    [1, 2, 3, 4, 5].map(x=>menuElements[x].classList.remove('active'));
  } else if(window.scrollY > sections[1].offsetTop  - 200 && window.scrollY < sections[2].offsetTop - 200) {
    menuElements[1].classList.add('active');
    [0, 2, 3, 4, 5].map(x=>menuElements[x].classList.remove('active'));
  } else if(window.scrollY > sections[2].offsetTop - 200 && window.scrollY < sections[3].offsetTop - 200) {
      menuElements[2].classList.add('active');
      [0, 1, 3, 4, 5].map(x=>menuElements[x].classList.remove('active'));
  } else if(window.scrollY > sections[3].offsetTop - 200 && window.scrollY < sections[4].offsetTop - 200) {
      menuElements[3].classList.add('active');
      [0, 1, 2, 4, 5].map(x=>menuElements[x].classList.remove('active'));
  } else if(window.scrollY > sections[4].offsetTop - 500 && window.scrollY < sections[5].offsetTop - 500){
      menuElements[4].classList.add('active');
      [0, 1, 2, 3, 5].map(x=>menuElements[x].classList.remove('active'));
  } else {
      menuElements[5].classList.add('active');
      [0, 1, 2, 3, 4].map(x=>menuElements[x].classList.remove('active'));
  }
});