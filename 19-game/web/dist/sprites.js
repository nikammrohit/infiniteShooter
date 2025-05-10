"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPRITES_32 = void 0;
const vector_js_1 = require("../dist/vector.js");
exports.SPRITES_32 = {
    tileSize: new vector_js_1.Vector(32, 32),
    floor: {
        slit: [
            {
                start: new vector_js_1.Vector(),
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
};
//NEXT: Finish Sprites_32 and get vectors from image.
//THEN: figure out how to draw sprites on screen(display_drivers), then work on collisions and player movements.
