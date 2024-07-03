const teamModal = document.querySelector('.team__modal');
const teamSlides = document.querySelectorAll('.team__slide');

teamSlides.forEach((slide) => {
  slide.addEventListener('click', (event) => {
    const isMoreButton = event.target.classList.contains('team__slide-button');
    if (teamModal && isMoreButton) {
      const parentSlide = event.target.closest('.team__slide');
      const slideChildElems = [...parentSlide.children]
        .filter((element) => !element.classList.contains('team__slide-buttons'))
        .map((element) => element.cloneNode(true));
      const teamModalBody = teamModal.querySelector('.team__modal-body');
      if (teamModalBody) {
        teamModalBody.innerHTML = '';
        const teamModalContent = document.createElement('div');
        teamModalContent.classList.add('team__modal-content');
        teamModalContent.append(...slideChildElems);
        teamModalBody.append(teamModalContent);
        teamModal.classList.add('active');
      }
    }
  });
});

if (teamModal) {
  teamModal.addEventListener('click', (event) => {
    const isModal = event.target.classList.contains('team__modal');
    const isModalBody = event.target.classList.contains('team__modal-body');
    if (isModal || isModalBody) event.currentTarget.classList.remove('active');
  });
}
