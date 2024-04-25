let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.navigation__list-mobile');
let body = document.querySelector('body');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
    if(!window.innerWidth <= 590) {
        body.classList.toggle('overflow-hidden');
    } 
});

window.onresize = removeOverflow

function removeOverflow() {
    if(window.innerWidth > 590) {
        body.classList.remove("overflow-hidden");
    } else if (menu.classList.contains('active')) {
        window.scrollTo(0,0)
        body.classList.add("overflow-hidden");
    }
};


const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
