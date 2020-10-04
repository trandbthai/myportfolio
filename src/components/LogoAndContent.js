import travelling from '../img/travelling.png';
import white from '../img/bgwhite.jpeg';
import blue from '../img/bgblue.jpeg';
import pink from '../img/bgpink.jpeg';
import purple from '../img/bgpurple.jpeg';
import wood from '../img/bgwood.jpeg';
import green from '../img/bggreen.jpeg';
import game from '../img/game.png';
import car from '../img/car.png';
import house from '../img/house.png';
import medical from '../img/medical.png';
import cooking from '../img/cooking.png';

export default [
  {
    originalBackground: blue,
    logo: game,
    intro: 'Playing a game with me.',
    project: '/game',
  },
  {
    originalBackground: pink,
    logo: travelling,
    intro: 'This is a project to capture all of my adventures.',
    project: '/travel',
  },
  {
    originalBackground: white,
    logo: house,
    intro:
      'Nobee is a company helping you find your new home without broker fee.',
    project: '/house',
  },
  {
    originalBackground: purple,
    logo: car,
    intro: 'Car accident in the New York state during 2017-2019.',
    project: '/car-analysis',
  },
  {
    originalBackground: wood,
    logo: medical,
    intro: 'Lalala',
    project: '/medical',
  },
  {
    originalBackground: green,
    logo: cooking,
    intro: 'Cooking time',
    project: '/cooking',
  },
];
