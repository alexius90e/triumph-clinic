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

const BOT_TOKEN = '';
const CHAT_ID = '';

[...modalForms, ...callbackForms].forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const phone = formData.get('phone');
    // const message = `Имя: ${name} Телефон ${phone}`;
    // sendMessage(message);
    event.currentTarget.reset();
    fetch('../../send.php', {
      method: 'POST',
      data: { name, phone },
    });
    if (callbackModal) callbackModal.classList.remove('active');
    if (thanksModal) thanksModal.classList.add('active');
  });
});

// function sendMessage(message) {
//   const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&parse_mode=html&text=${message}`;

//   fetch(url)
//     .then((data) => {
//       console.log('Message sent successfully:', data);
//     })
//     .catch((error) => {
//       console.error('Error sending message:', error);
//     });
// }
