/* global Linear */
/* eslint no-undef: "error" */

import { TimelineMax } from 'gsap';
// import canvas from './canvas';

const tl = new TimelineMax();
const boat = document.querySelectorAll('.animation-js .boat');
const btnCode = {
  up: 38,
  right: 39,
  down: 40,
  left: 37,
  space: 32,
};
tl.from(boat, 5, { x: 1500, ease: Linear.easeNone });

// window.addEventListener('keydown', (event) => {
//   switch (event.keyCode) {
//     case btnCode.up: {
//       tl.clear();
//       tl.to(boat, 0, { rotation: 90 })
//         .to(boat, 10, { y: -1000, ease: Linear.easeNone });
//       break;
//     }
//     case btnCode.right: {
//       tl.clear();
//       tl.to(boat, 0, { rotation: 180, scaleX: 1, scaleY: -1 })
//         .to(boat, 10, { x: 2000, ease: Linear.easeNone });
//       break;
//     }
//     case btnCode.left: {
//       tl.clear();
//       tl.to(boat, 0, { rotation: 0, scaleX: 1, scaleY: 1 })
//         .to(boat, 10, { x: -2000, ease: Linear.easeNone });
//       break;
//     }
//     case btnCode.down: {
//       tl.clear();
//       tl.to(boat, 0, { rotation: -90 })
//         .to(boat, 10, { y: 1000, ease: Linear.easeNone });
//       break;
//     }
//     case btnCode.space: {
//       tl.remove();
//       break;
//     }
//     default: {
//       console.log('Я таких значений не знаю');
//     }
//   }
// });

