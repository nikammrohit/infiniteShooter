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

    public draw(playerPosition: Vector, isMoving: boolean, isReversed: boolean, animationFrame: number) { //update player position from pass by reference values from game.ts

        this.drawPlayer(playerPosition, isMoving, isReversed, animationFrame);
    }

    //blueprint to draw sprite on screen
    //calculate width and height for each sprite (since it is diff for each animation frame)
    private drawSprite(sprite: Sprite, position:Vector, isReversed: boolean) {
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

        this.ctx.save(); //save curr context state

        //reverse sprite if it needs to
        if (isReversed) {
            this.ctx.scale(-1, 1); //flip sprite horizontally (mirror image over x axis (-1) but keep y axis normal (1)
            this.ctx.translate(-dx - sw, 0); //move canvas and origin to location of sprite, so we can see it, since its been flipped over the x axis. 0 means no vertical shift
        }

        this.ctx.imageSmoothingEnabled = false;
        this.ctx.drawImage(this.spritesheet, sx, sy, sw, sh, isReversed ? 0 : dx, dy, sw, sh); //if reversed draw dx at 0 since we alr translated canvas

        this.ctx.restore(); //after drawing return to previously saved state so player can run without being flipped if need be
        return 0;
    }

    //draw player with animations
    private drawPlayer(playerPosition: Vector, isMoving: boolean, isReversed: boolean, animationFrame: number) {

        const sprites = isMoving
            ? this.sprites.player.run //if moving run animation
            : this.sprites.player.idle; //if still idle

        const index = animationFrame % sprites.length; //modulo to loop animationFrames and calc which frame we need
        const sprite = sprites[index];

        this.drawSprite(sprite, playerPosition, isReversed);
    }
    //private drawTiles() {}
    //private drawUI() {}
    //public draw() {}

    //private getPlayerSprites() {}
}


//TODO: collisions and flip player on opposite left movement
