import { SPRITES_96, Sprite, SpritePreset } from "./sprites.js"

type SpriteConfig = { scale: number, sprites: SpritePreset };

export class DisplayDriver { //pass ctx to displaydriver from Game class

  //calculate width and height for each sprite (since it is diff for each animation frame)
  private drawSprite(sprite: Sprite, position:Vector) {
        //get sprite coords from sprite sheet
        const sx = sprite.start.x;
        const sy = sprite.start.y;

        //calc sprite width & height
        const sw = sprite.size.x - sx;
        const sh = sprite.size.y - sy;

        //get screen position to place sprite (including offset)
        const dx = position.x + (sprite.offset?.x || 0);
        const dy = position.y + (sprite.offset?.y || 0);

        //scaling image
        const dw = sw * this.scale;
        const dh = sh * this.scale;

        this.ctx.imageSmoothingEnabled = false;
        this.ctx.drawImage(this.spritesheet, sx, sy, sw, sh, dx, dy, dw, dh);
    return 0;
  }
}
