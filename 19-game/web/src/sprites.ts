import { Vector } from "../dist/vector.js"

//create obj sprite
export type Sprite = {
  start: Vector;
  size: Vector;
  offset: Vector;
};

export type SpritePreset = {
  tileSize: Vector; //size of each tile?? we need to add collision boundries to walls, floors, players, and enemies
  floor: {
    slit: Vector[];
    quad: Vector[];
    whole: Vector[];
    grate: Vector[];
  };
  //wall: {}; //TODO: complete layout for walls
  player: {
    idle: Vector[];
    talk: Vector[];
    reload: Vector[];
    run: Vector[];
    shoot: Vector[];
    death: Vector[];
  };
  //enemy: Vector[]; //TODO: complete enemy layout
  shield: {
    zero: Vector[];
    one: Vector[];
    two: Vector[];
    three: Vector[];
  };
  health: {
    double: Vector[];
    one: Vector[];
    two: Vector[];
    three: Vector[];
    four: Vector[];
    five: Vector[];
    six: Vector[];
    seven: Vector[];
    eight: Vector[];
    nine: Vector[];
    ten: Vector[];
  };
}

export const SPRITES_32: SpritePreset = {
  tileSize: new Vector(32, 32),
  floor: {
    slit: [
      {
        start: new Vector(),
        size: new Values(),
        offset: new Values(),
      }
    ],
    quad: [
      {
        //INSERT START SIZE OFFSTE
      }
    ],
    //quad
    //whole
    //grate
  },
  player: {
    idle: [
      {
        //vector values
      }
    ],
    //talk
    //reload
    //etc...
  },
  //shield
}

//NEXT: Finish Sprites_32 and get vectors from image.
//THEN: figure out how to draw sprites on screen(display_drivers), then work on collisions and player movements.
