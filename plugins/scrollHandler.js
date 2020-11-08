import Vue from 'vue';

Vue.prototype.$scrollHandler = string => {
  switch (string) {
    case 'on':
      onScroll();
      break;
    case 'off':
      offScroll();
      break;
  }
};
Vue.prototype.$goTopHandler = string => {
  switch (string) {
    case 'on':
      offScrollTop();
      break;
    case 'off':
      onScrollTop();
      break;
  }
};

function onScroll() {
  const wrap = document.querySelectorAll('.scroll');
  for (let i = 0; i < wrap.length; i++) {
    wrap[i].classList.add('onScr');
  }
}
function offScroll() {
  const wrap = document.querySelectorAll('.scroll');
  for (let i = 0; i < wrap.length; i++) {
    wrap[i].classList.remove('onScr');
  }
}
function onScrollTop() {
  document.querySelector('.arrowTop').classList.add('beforeActive');
}
function offScrollTop() {
  document.querySelector('.arrowTop').classList.remove('beforeActive');
}
export default {
  onScroll,
  offScroll,
  onScrollTop,
  offScrollTop,
};
