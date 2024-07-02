const stepByStepButtons = document.querySelectorAll('.step-by-step__controls-button');
const stepByStepCards = document.querySelectorAll('.step-by-step__card');
const stepByStepContent = document.querySelector('.step-by-step__content');

stepByStepButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const targetId = event.currentTarget.dataset.target;
    const targetCard = document.getElementById(targetId);
    if (targetCard) {
      stepByStepButtons.forEach((buttonElem) => buttonElem.classList.remove('active'));
      stepByStepCards.forEach((card) => card.classList.remove('active'));
      event.currentTarget.classList.add('active');
      targetCard.classList.add('active');
    }
  });
});
