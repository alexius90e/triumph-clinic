const burger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');

if (burger && headerNav) {
  burger.addEventListener('click', () => {
    headerNav.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('hidden')
  });

  headerNav.addEventListener('click', (event) => {
    const isLink = event.target.classList.contains('header__nav-link');
    const isPhone = event.target.classList.contains('header__nav-phone');
    const isButton = event.target.classList.contains('button');

    if (isLink || isPhone || isButton) {
      headerNav.classList.remove('active');
      burger.classList.remove('active');
      document.body.classList.remove('hidden')
    }
  });
}
