"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPRITES_96 = void 0;
const vector_js_1 = require("../dist/vector.js");
//TODO: Create SPRITES_32 & SRITES_63 if I want zooming or diff sizes
exports.SPRITES_96 = {
    tileSize: new vector_js_1.Vector(32, 32),
    floor: {
        slit: [
            {
                start: new vector_js_1.Vector(0, 0),
                size: new Values(0, 0),
                offset: new Values(0, 0),
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
                start: new vector_js_1.Vector(29, 47),
                size: new vector_js_1.Vector(66, 96),
                //offset:
            }
        ],
        talk: [
            {
                start: new vector_js_1.Vector(29, 143),
                size: new vector_js_1.Vector(66, 192),
                //offset:
            },
            {
                start: new vector_js_1.Vector(125, 143),
                size: new vector_js_1.Vector(162, 192),
                //offset:
            }
        ],
        reload: [
            {
                start: new vector_js_1.Vector(29, 239),
                size: new vector_js_1.Vector(66, 288),
            },
            {
                start: new vector_js_1.Vector(125, 233),
                size: new vector_js_1.Vector(165, 288),
            },
            {
                start: new vector_js_1.Vector(221, 239),
                size: new vector_js_1.Vector(261, 288),
            },
            {
                start: new vector_js_1.Vector(317, 233),
                size: new vector_js_1.Vector(357, 288),
            },
            {
                start: new vector_js_1.Vector(413, 233),
                size: new vector_js_1.Vector(453, 288),
            },
        ]
        //etc...
    },
    //shield
};
//NEXT: Finish Sprites_32 and get vectors from image.
//THEN: figure out how to draw sprites on screen(display_drivers), then work on collisions and player movements.
