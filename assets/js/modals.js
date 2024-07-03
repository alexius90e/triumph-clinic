const callbackButtons = document.querySelectorAll('.button--callback');
const callbackModal = document.querySelector('.modal--callback');
const thanksModal = document.querySelector('.modal--thanks');

callbackButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (callbackModal) {
      callbackModal.classList.add('active');
      thanksModal.classList.remove('active');
    }
  });
});

[callbackModal, thanksModal].forEach((modal) => {
  modal.addEventListener('click', (event) => {
    const isModal = event.target.classList.contains('modal');
    const isModalBody = event.target.classList.contains('modal__body');
    if (isModal || isModalBody) event.currentTarget.classList.remove('active');
  });
});

const modalForms = document.querySelectorAll('.modal__form');
const callbackForms = document.querySelectorAll('.callback__form');

[...modalForms, ...callbackForms].forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    console.log(name, phone)
    event.currentTarget.reset();
    if (callbackModal) callbackModal.classList.remove('active');
    if (thanksModal) thanksModal.classList.add('active');
  });
});
