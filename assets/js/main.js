import './sliders.js';
import './step-by-step.js';
import './team.js';
import './faq.js';
import './nav.js';
import './modals.js';
import './reviews.js';

const maskOptions = {
  mask: '+{7} (000) 000 00 00',
};

const phoneInputClassNames = ['input--phone'];

const phoneInputs = phoneInputClassNames
  .map((name) => document.querySelectorAll(`.${name}`))
  .reduce((acc, array) => [...acc, ...array], []);

phoneInputs.forEach((inputElement) => IMask(inputElement, maskOptions));

