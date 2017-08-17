import { TimelineMax, TweenLite } from 'gsap';

const canvasElement = document.querySelector('#canvasik');
const ctx = canvasElement.getContext('2d');
const image = new Image();
image.src = 'img/icons/icon-boat.svg';
const tl = new TimelineMax();


const loop = () => {
  ctx.clearRect(0, 0, 1600, 1200);
  for (let i = 0; i < 12; i += 1) {
    ctx.drawImage(image, image.xpos, i * 100);
  }
};

const init = () => {
  image.xpos = 50;
  image.ypos = 50;
  image.onload = () => {
    TweenLite.ticker.addEventListener('tick', loop);
  };

  tl.to(image, 2, {
    xpos: 1000,
    ypos: 100,
    repeat: -1,
    yoyo: true,
  });
};

init();
