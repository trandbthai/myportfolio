import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

import ButtonBase from '@material-ui/core/ButtonBase';

import {
  openDoor1,
  openDoor2,
  openDoor3,
  openDoor4,
  randomDoor,
} from './RandomDoor';
import Background from '../img/Game/spacebg.jpg';
import door from '../img/Game/door.png';
import treasures from '../img/Game/image3.png';

let numClosedDoors = 4;

const useStyles = makeStyles(theme => ({
  image: {
    position: 'relative',
    height: 188,
    borderRadius: '50%',
    ':focus': {
      outline: '0 !important',
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
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
    borderRadius: '50%',
    //   ':focus': {
    //     outline: 'none !important',
    //   },
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
  },

  result: {
    height: 40,
    width: 450,
    marginTop: 12,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'purple',
  },
  playAgain: {
    height: 50,
    width: 200,
    backgroundColor: 'white',
    borderWidth: 5,
    borderRadius: 50,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'gray',
      color: 'white',
    },
  },

  adventure: {
    height: 50,
    width: 200,
    marginTop: 40,
    backgroundColor: 'white',
    borderWidth: 5,
    borderRadius: 50,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'gray',
      color: 'white',
    },
  },
}));

randomDoor();
const Game = () => {
  const [door1, setDoor1] = useState(door);
  const [door2, setDoor2] = useState(door);
  const [door3, setDoor3] = useState(door);
  const [door4, setDoor4] = useState(door);
  const [win, setWin] = useState(false);
  const [opacity1, setOpacity1] = useState(0);
  const [opacity2, setOpacity2] = useState(0);
  const [opacity3, setOpacity3] = useState(0);
  const [opacity4, setOpacity4] = useState(0);

  const classes = useStyles();

  const isWin =
    win &&
    (numClosedDoors === 1 || numClosedDoors === 2 || numClosedDoors === 3);
  const isLose = !win && numClosedDoors === 1;
  const isOver = numClosedDoors === 0 || numClosedDoors < 0;

  return (
    <div
      className="h-screen w-screen"
      style={{backgroundImage: `url(${Background})`}}
    >
      <div className="ml-3 pt-3">
        <IconButton
          classes={{
            root: 'bg-white hover:bg-gray-200',
          }}
          onClick={() => {
            window.open('/', '_top');
          }}
        >
          <HomeIcon sizelarge />
        </IconButton>
      </div>
      <div className="flex items-center ">
        <div className="flex justify-center items-center">
          <div className="ml-48"></div>
          <h2 className="pt-6 ml-64 pl-32 text-5xl font-mono font-bold italic text-white text-center hover:text-red-100">
            Finding Treasures
          </h2>
        </div>
      </div>

      <div className="mt-6 mr-12 flex">
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
                If you can open the Treasures door before picking all the
                Monsters you WIN!
              </li>
              <li className="mt-3">LET'S PLAY!</li>
            </ul>
          </div>
        </div>
        <div className="w-2/3 ">
          <div className="h-1/2">
            <div className="grid grid-cols-4 gap-6">
              <ButtonBase
                focusRipple
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: '100%',
                }}
                onClick={() => {
                  setDoor1(openDoor1);
                  setOpacity1(0);
                  if (openDoor1 === treasures) {
                    setWin(true);
                  }
                  numClosedDoors -= 1;
                }}
                onMouseEnter={() => {
                  setOpacity1(0.4);
                }}
                onMouseLeave={() => {
                  setOpacity1(0);
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${door1})`,
                  }}
                />
                <span
                  className={classes.imageBackdrop}
                  style={{opacity: opacity1}}
                />
              </ButtonBase>
              <ButtonBase
                focusRipple
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: '100%',
                }}
                onClick={() => {
                  setDoor2(openDoor2);
                  setOpacity2(0);
                  if (openDoor2 === treasures) {
                    setWin(true);
                  }
                  numClosedDoors -= 1;
                }}
                onMouseEnter={() => {
                  setOpacity2(0.4);
                }}
                onMouseLeave={() => {
                  setOpacity2(0);
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${door2})`,
                  }}
                />
                <span
                  className={classes.imageBackdrop}
                  style={{opacity: opacity2}}
                />
              </ButtonBase>
              <ButtonBase
                focusRipple
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: '100%',
                }}
                onClick={() => {
                  setDoor3(openDoor3);
                  setOpacity3(0);
                  if (openDoor3 === treasures) {
                    setWin(true);
                  }
                  numClosedDoors -= 1;
                }}
                onMouseEnter={() => {
                  setOpacity3(0.4);
                }}
                onMouseLeave={() => {
                  setOpacity3(0);
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${door3})`,
                  }}
                />
                <span
                  className={classes.imageBackdrop}
                  style={{opacity: opacity3}}
                />
              </ButtonBase>
              <ButtonBase
                focusRipple
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: '100%',
                }}
                onClick={() => {
                  setDoor4(openDoor4);
                  setOpacity4(0);

                  if (openDoor4 === treasures) {
                    setWin(true);
                  }
                  numClosedDoors -= 1;
                }}
                onMouseEnter={() => {
                  setOpacity4(0.4);
                }}
                onMouseLeave={() => {
                  setOpacity4(0);
                }}
              >
                <span
                  className={classes.imageSrc}
                  style={{
                    backgroundImage: `url(${door4})`,
                  }}
                />
                <span
                  className={classes.imageBackdrop}
                  style={{opacity: opacity4}}
                />
              </ButtonBase>
            </div>
          </div>
          <div className="mt-4">
            <div className="mt-8 flex justify-center">
              {isWin ? (
                <div className="flex-row justify-center items-center ">
                  <div className={classes.result}>
                    CONGRATULATIONS!!! TREASURES ARE YOURS
                  </div>
                  <div className="mt-5 flex justify-center items-center">
                    <Button
                      class={classes.playAgain}
                      onClick={() => {
                        setDoor1(door);
                        setDoor2(door);
                        setDoor3(door);
                        setDoor4(door);
                        setWin('');
                        numClosedDoors = 4;
                        randomDoor();
                      }}
                    >
                      PLAY AGAIN
                    </Button>
                  </div>
                </div>
              ) : null}
              {isLose ? (
                <div className="flex-row justify-center items-center ">
                  <div className={classes.result}>
                    OOOPS!!! CUTE MONSTERS ARE THE WINNERS
                  </div>
                  <div className="mt-5 flex justify-center items-center">
                    <Button
                      class={classes.playAgain}
                      onClick={() => {
                        setDoor1(door);
                        setDoor2(door);
                        setDoor3(door);
                        setDoor4(door);
                        setWin('');
                        numClosedDoors = 4;
                        randomDoor();
                      }}
                    >
                      PLAY AGAIN
                    </Button>
                  </div>
                </div>
              ) : null}
              {isOver ? (
                <Button
                  class={classes.adventure}
                  onClick={() => {
                    setDoor1(door);
                    setDoor2(door);
                    setDoor3(door);
                    setDoor4(door);
                    setWin('');
                    numClosedDoors = 4;
                    randomDoor();
                  }}
                >
                  MORE ADVENTURES
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
