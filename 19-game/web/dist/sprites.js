import { Vector } from "./vector.js";
//TODO: Create SPRITES_32 & SRITES_63 if I want zooming or diff sizes
export const SPRITES_96 = {
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
        ]
    },
    //shield
};
//NEXT: Finish Sprites_32 and get vectors from image.
//THEN: figure out how to draw sprites on screen(display_drivers), then work on collisions and player movements.
