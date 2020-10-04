import blue from '../img/bgblue.jpeg';

import purple from '../img/bgpurple.jpeg';

import game from '../img/game.png';
import car from '../img/car.png';

import gray from '../img/bggray.jpg';
import medical from '../img/medical1.png';

export default [
  {
    originalBackground: blue,
    logo: game,
    intro: 'Playing a game with me.',
    project: '/game',
  },
  {
    originalBackground: purple,
    logo: car,
    intro: 'Car accident in the New York state during 2017-2019.',
    project: '/car-analysis',
  },
  {
    originalBackground: gray,
    logo: medical,
    intro: 'Prediction of medical billing charged by health insurance',
    project: '/medical',
  },
];
