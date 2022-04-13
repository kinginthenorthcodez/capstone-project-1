/* Mobile menu */
const menuBtn = document.querySelector('#menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const menuItems = document.querySelectorAll('.menu-item');

function swapIcon() {
  if (mobileMenu.classList.contains('hide-menu')) {
    menuBtn.src = './assets/images/mobile_menu.png';
  } else {
    menuBtn.src = './assets/images/close_mobile_menu.png';
    menuBtn.style = 'background: black';
  }
}

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hide-menu');
  mobileMenu.style.transition = 'all 3s';
  swapIcon();
});

menuItems.forEach((menuList) => {
  menuList.addEventListener('click', () => {
    mobileMenu.classList.toggle('hide-menu');
    swapIcon();
  });
});