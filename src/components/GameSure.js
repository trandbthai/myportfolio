import React from 'react';
import Background from '../img/Game/spacebg.jpg';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

import door from '../img/Game/door.png';
import monster3 from '../img/Game/monster3.png';
import monster4 from '../img/Game/monster4.png';
import monster5 from '../img/Game/monster5.png';
import treasures from '../img/Game/image3.png';

let currentlyPlaying = true;
let numClosedDoors = 4;
let openDoor1;
let openDoor2;
let openDoor3;
let openDoor4;

const useStyles = makeStyles(theme => ({
  image: {
    position: 'relative',
    height: 188,
    borderRadius: '50%',
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    ':focus': {
      outline: '0 !important',
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
    },
  },
  focusVisible: {},
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
}));

const Game = () => {
  const classes = useStyles();
  return (
    <div
      className="h-screen w-screen"
      style={{backgroundImage: `url(${Background})`}}
    >
      <h2 className="pt-16 pl-64  text-5xl font-mono font-bold italic text-white text-center hover:text-red-100">
        Finding Treasures
      </h2>
      <div className="mt-6 mr-12 flex items-center">
        <div className="w-1/3 flex justify-center items-center">
          <div className="w-2/3 h-full bg-gray-800 rounded-lg">
            <p className="mt-6 text-center text-white text-lg font-bold">
              How to Play
            </p>
            <ul className="mt-6 ml-8 mb-6 mr-6 list-decimal text-sm text-white text-justify">
              <li>
                Hiding behind one of these doors is the Treasures which is
                protecting by Monsters.
              </li>
              <li className="mt-3">
                Your mission is to collect the treasures without running into
                the Monsters.
              </li>
              <li className="mt-3">
                If you can avoid the Monster and you open the Treasures door,
                you WIN!
              </li>
              <li className="mt-3">See if you can score a winning streak!</li>
            </ul>
          </div>
        </div>
        <div className="w-2/3">
          <div className="grid grid-cols-4 gap-6">
            <ButtonBase
              focusRipple
              className={classes.image}
              focusVisibleClassName={classes.focusVisible}
              style={{
                width: '100%',
              }}
            >
              <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${door})`,
                }}
              />
              <span className={classes.imageBackdrop} />
            </ButtonBase>

            <div>
              <ButtonBase
                focusRipple
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: '100%',
                  focus: 'outline: none',
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${door})`,
                  }}
                />
                <span className={classes.imageBackdrop} />
              </ButtonBase>
            </div>
            <div>
              <ButtonBase
                focusRipple
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: '100%',
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${door})`,
                  }}
                />
                <span className={classes.imageBackdrop} />
              </ButtonBase>
            </div>
            <div>
              <ButtonBase
                focusRipple
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: '100%',
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${door})`,
                  }}
                />
                <span className={classes.imageBackdrop} />
              </ButtonBase>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <Button className="bg-white">Win or Lose</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
