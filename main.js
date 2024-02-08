const { shuffle, shuffleScroll, directions, animations } = require('txt-shuffle');

const paramsA = {
  text        : '',
  duration    : 0.5,
  fps         : 60,
  animation   : animations.STAY,
  direction   : directions.RIGHT,
  nglyphs     : '',
};

let el;

const setup = (elem_id) => {
  el = document.getElementById(elem_id);
  paramsA.text = el.getAttribute('id');
  playShuffle();
};

const onUpdate = (output) => {
  el.innerText = output;
};

const playShuffle = () => {
  const { text, duration, fps, nglyphs, direction, animation } = paramsA;
  const glyphs = nglyphs.length ? nglyphs : undefined;

  shuffle({ text, duration, fps, glyphs, direction, animation, onUpdate });
};

const playShuffleScroll = () => {
  const { text, fps, nglyphs, stayFrames, animation } = paramsB;
  const glyphs = nglyphs.length ? nglyphs : undefined;

  shuffleScroll({ text, fps, glyphs, stayFrames, animation, onUpdate });
};

function resetAll() {
  elems = document.querySelectorAll('.txt-shuffle a');
  elems.forEach(elem => {
    elem.innerText = elem.getAttribute('id');
  })
}

elems = document.querySelectorAll('.txt-shuffle a');
elems.forEach(elem => elem.addEventListener('mouseenter', function(){
  elem_id = elem.getAttribute('id')
  setup(elem_id);
  resetAll();
}))
