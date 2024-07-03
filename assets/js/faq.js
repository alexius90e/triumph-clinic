const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((faqItem) => {
  faqItem.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');
    const panel = event.currentTarget.querySelector('.faq__item-answer');
    const parentFaqItems = document.querySelectorAll('.faq__item');
    parentFaqItems.forEach((item) => {
      if (item !== event.currentTarget && item.classList.contains('active')) {
        item.classList.remove('active');
        const itemPanel = item.querySelector('.faq__item-answer');
        itemPanel.style.maxHeight = null;
      }
    });
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});