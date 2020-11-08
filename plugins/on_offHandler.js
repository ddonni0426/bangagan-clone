import Vue from 'vue';

Vue.prototype.$on_offHandler = (toggle, selector, className) => {
  switch (toggle) {
    case 'on':
      activation(selector, className);
      break;
    case 'off':
      deactivation(className);
      break;
  }
};
function activation(selector, className) {
  let tar = document.querySelector(`${selector}`);
  tar.classList.add(`${className}`);
}
function deactivation(className) {
  let tar = document.querySelector(`.${className}`);
  tar.classList.remove(`${className}`);
}

export default {
  activation,
  deactivation,
};
