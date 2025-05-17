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
        idle: Sprite[];
        talk: Sprite[];
        reload: Sprite[];
        run: Sprite[];
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
};

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
                start: new Vector(0, 0),
                size: new Vector(0, 0),
                offset: new Vector(0, 0),
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
            }
        ],
        talk: [
            {
                start: new Vector(29, 143),
                size: new Vector(66, 192),
            },
            {
                start: new Vector(125, 143),
                size: new Vector(162, 192),
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
        ],
        run: [
            {
                start: new Vector(32, 323),
                size: new Vector(63, 384),
                offset: new Vector(0, 12)
            },
            {
                start: new Vector(125, 335),
                size: new Vector(162, 384),
                offset: new Vector(0, 0)
            },
            {
                start: new Vector(215, 323),
                size: new Vector(258, 384),
                offset: new Vector(0, 12)
            },
            {
                start: new Vector(317, 335),
                size: new Vector(354, 384),
                offset: new Vector(0, 0)
            },
        ],
        shoot: [
            {
                start: new Vector(23, 431),
                size: new Vector(81, 480),
                offset: new Vector(0, 0)
            },
            {
                start: new Vector(119, 416),
                size: new Vector(156, 480),
                offset: new Vector(0, 0)
            },
            {
                start: new Vector(221, 425),
                size: new Vector(261, 480),
                offset: new Vector(0, 0)
            },
            {
                start: new Vector(317, 431),
                size: new Vector(369, 480),
                offset: new Vector(0, 0)
            },
        ],
        death: [
            {
                start: new Vector(17, 527),
                size: new Vector(75, 576),
                offset: new Vector(0, 0)
            },
            {
                start: new Vector(113, 515),
                size: new Vector(171, 576),
                offset: new Vector(0, 0)
            },
            {
                start: new Vector(206, 512),
                size: new Vector(270, 576),
                offset: new Vector(0, 0)
            },
            {
                start: new Vector(293, 494),
                size: new Vector(378, 570),
                offset: new Vector(0, 0)
            },
            {
                start: new Vector(386, 482),
                size: new Vector(474, 573),
                offset: new Vector(0, 0)
            },
            {
                start: new Vector(479, 482),
                size: new Vector(576, 570),
                offset: new Vector(0, 0)
            },
            {
                start: new Vector(578, 485),
                size: new Vector(669, 567),
                offset: new Vector(0, 0)
            },
        ],
    },
    //shield: {}
}
