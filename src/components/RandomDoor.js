import monster3 from '../img/Game/monster1.webp';
import monster4 from '../img/Game/monster4.png';
import monster5 from '../img/Game/monster8.png';
import treasures from '../img/Game/image3.png';

let numClosedDoors = 4;
export let openDoor1;
export let openDoor2;
export let openDoor3;
export let openDoor4;

function randomDoor() {
  let treasureDoor = Math.floor(Math.random() * numClosedDoors);
  if (treasureDoor === 0) {
    openDoor1 = monster3;
    openDoor2 = monster4;
    openDoor3 = monster5;
    openDoor4 = treasures;
  } else if (treasureDoor === 1) {
    openDoor1 = monster4;
    openDoor2 = monster3;
    openDoor3 = treasures;
    openDoor4 = monster5;
  } else if (treasureDoor === 2) {
    openDoor1 = monster5;
    openDoor2 = treasures;
    openDoor3 = monster4;
    openDoor4 = monster3;
  } else {
    openDoor1 = treasures;
    openDoor2 = monster5;
    openDoor3 = monster3;
    openDoor4 = monster4;
  }
}

randomDoor();

export {randomDoor};
