export class DisplayDriver {
    //pass ctx and spritesheet by reference to displaydriver from Game class so we can use it here
    constructor(ctx, spritesheet, config) {
        this.ctx = ctx;
        this.spritesheet = spritesheet;
        this.sprites = config.sprites;
    }
    ;
    draw(playerPosition) {
        this.drawPlayer(playerPosition);
    }
    //calculate width and height for each sprite (since it is diff for each animation frame)
    drawSprite(sprite, position) {
        var _a, _b;
        //get sprite coords from sprite sheet
        const sx = sprite.start.x;
        const sy = sprite.start.y;
        //calc sprite width & height
        const sw = sprite.size.x - sx;
        const sh = sprite.size.y - sy;
        //get screen position to place sprite (including offset)
        const dx = position.x + (((_a = sprite.offset) === null || _a === void 0 ? void 0 : _a.x) || 0);
        const dy = position.y + (((_b = sprite.offset) === null || _b === void 0 ? void 0 : _b.y) || 0);
        //scaling image
        //const dw = sw * this.scale;
        //const dh = sh * this.scale;
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.drawImage(this.spritesheet, sx, sy, sw, sh, dx, dy, sw, sh);
        return 0;
    }
    drawPlayer(position) {
        const sprite = this.sprites.player.idle[0]; //FIXME: getPlayerSprites func
        this.drawSprite(sprite, position);
    }
}
//TODO: Function which draws sprite with input of its sprite and position
