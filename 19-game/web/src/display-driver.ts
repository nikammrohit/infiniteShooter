//objs to draw & display
import { Vector } from "./vector.js"
import { SPRITES_96, Sprite, SpritePreset } from "./sprites.js"

type SpriteConfig = { sprites: SpritePreset }; //removed scale: number

export class DisplayDriver {
    private sprites: SpritePreset;

    //pass ctx and spritesheet by reference to displaydriver from Game class so we can use it here
    constructor(
        private ctx: CanvasRenderingContext2D,
        private spritesheet: HTMLImageElement,
        config: SpriteConfig ) {
            this.sprites = config.sprites;
    };

    public draw(playerPosition: Vector, isMoving: boolean, animationFrame: number) { //update player position by Vector values from game.ts
        this.drawPlayer(playerPosition, isMoving, animationFrame);
    }

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

    private drawPlayer(position: Vector, isMoving: boolean, frame: number) {
        const sprites = isMoving
        ? this.sprites.player.run //if moving run animation
        : this.sprites.player.idle; //if still idle

        const index = frame % sprites.length;
        const sprite = sprites[index];

        this.drawSprite(sprite, position);
    }
    //private drawTiles() {}
    //private drawUI() {}
    //public draw() {}

    //private getPlayerSprites() {}
}


//TODO: Function which draws sprite with input of its sprite and position
