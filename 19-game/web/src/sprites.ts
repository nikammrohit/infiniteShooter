import { Vector } from "./vector.js"

//create obj sprite
export type Sprite = {
  start: Vector;
  size: Vector;
  offset?: Vector; //offset optional for now
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

//TODO: Create SPRITES_32 & SRITES_63 if I want zooming or diff sizes

export const SPRITES_96: SpritePreset = {
  tileSize: new Vector(32, 32),
  floor: {
    slit: [
      {
        start: new Vector(0, 0),
        size: new Vector(0, 0),
        offset: new Vector(0, 0),
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
        start: new Vector(29, 47),
        size: new Vector(66, 96),
        //offset:
      }
    ],
    talk: [
      {
        start: new Vector(29, 143),
        size: new Vector(66, 192),
        //offset:
      },
      {
        start: new Vector(125, 143),
        size: new Vector(162, 192),
        //offset:
      }
    ],
    reload: [
      {
        start: new Vector(29, 239),
        size: new Vector(66, 288),
      },
      {
        start: new Vector(125, 233),
        size: new Vector(165, 288),
      },
      {
        start: new Vector(221, 239),
        size: new Vector(261, 288),
      },
      {
        start: new Vector(317, 233),
        size: new Vector(357, 288),
      },
      {
        start: new Vector(413, 233),
        size: new Vector(453, 288),
      },
    ]
    //etc...
  },
  //shield
}

//NEXT: Finish Sprites_32 and get vectors from image.
//THEN: figure out how to draw sprites on screen(display_drivers), then work on collisions and player movements.
