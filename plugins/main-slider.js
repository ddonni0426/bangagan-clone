import Vue from 'vue';

Vue.prototype.$slideHandler = len => {
  objs.total = len;
  return slider();
};

let objs = { total: 0, current_scn: 1 };

function slider() {
  let sid = setInterval(() => {
    turn();
    rmClass();
    addClass();
  }, 4000);
  return sid;
}

function turn() {
  objs.current_scn < objs.total ? objs.current_scn++ : (objs.current_scn = 1);
  return;
}

function rmClass() {
  const olds = document.querySelectorAll('.show');
  olds.forEach(e => {
    e.classList.add('hidden');
    e.classList.remove('show');
  });
  return;
}

function addClass() {
  const pic = document.querySelectorAll('picture.picture');
  const descWrap = document.querySelectorAll('.descWrap');
  for (let i = 0; i < objs.total; i++) {
    if (pic[i].getAttribute('data-scene') == objs.current_scn) {
      pic[i].classList.add('show');
      descWrap[i].classList.add('show');
      pic[i].classList.remove('hidden');
      descWrap[i].classList.remove('hidden');
    } else {
      continue;
    }
  }
  return;
}

export default {
  turn,
  slider,
  rmClass,
  addClass,
};
