//behind the scenes: objs to draw & display
import { Vector } from "./vector.js"
import { SPRITES_96, Sprite, SpritePreset } from "./sprites.js"

export class DisplayDriver {
    //recieves ctx, spritesheet, and SpritePreset(the vector data) by reference from Game obj instantiation to use
    constructor(
        private ctx: CanvasRenderingContext2D,
        private spritesheet: HTMLImageElement,
        private sprites: SpritePreset) { //allows us to use this.sprites for .player.run, .player.idle, etc...
     };

    public draw(playerPosition: Vector, isMoving: boolean, animationFrame: number) { //update player position from pass by reference values from game.ts

        this.drawPlayer(playerPosition, isMoving, animationFrame);
    }

    //blueprint to draw sprite on screen
    //calculate width and height for each sprite (since it is diff for each animation frame)
    private drawSprite(sprite: Sprite, position:Vector) {
        //get sprite coords from sprite sheet
        const sx = sprite.start.x;
        const sy = sprite.start.y;

        //calc sprite width & height
        const sw = sprite.size.x - sx;
        const sh = sprite.size.y - sy;

        //get screen position to place sprite
        const dx = position.x;
        const dy = position.y - (sprite.offset?.y || 0);

        //offset handling if exists
        const offsetX = sprite.offset?.x || 0;
        const offsetY = sprite.offset?.y || 0;

        //scaling image
        //const dw = sw * this.scale;
        //const dh = sh * this.scale;

        this.ctx.imageSmoothingEnabled = false;
        this.ctx.drawImage(this.spritesheet, sx, sy, sw, sh, dx, dy, sw, sh);
        return 0;
    }

    //draw player with animations
    private drawPlayer(playerPosition: Vector, isMoving: boolean, animationFrame: number) {

        //TODO: if reversed = true flip sprite otherwise keep it same. check boolean and if true then change sprite we sleecting but keep rest same

        const sprites = isMoving
        ? this.sprites.player.run //if moving run animation
        : this.sprites.player.idle; //if still idle

        const index = animationFrame % sprites.length; //modulo to loop animationFrames and calc which frame we need (ex: )
        const sprite = sprites[index];

        this.drawSprite(sprite, playerPosition);
    }
    //private drawTiles() {}
    //private drawUI() {}
    //public draw() {}

    //private getPlayerSprites() {}
}


//TODO: collisions and flip player on opposite left movement
