export class DisplayDriver {
    //recieves ctx, spritesheet, and SpritePreset(the vector data) by reference from Game obj instantiation to use
    constructor(ctx, spritesheet, sprites) {
        this.ctx = ctx;
        this.spritesheet = spritesheet;
        this.sprites = sprites;
    }
    ;
    draw(playerPosition, isMoving, animationFrame) {
        this.drawPlayer(playerPosition, isMoving, animationFrame);
    }
    //blueprint to draw sprite on screen
    //calculate width and height for each sprite (since it is diff for each animation frame)
    drawSprite(sprite, position) {
        var _a, _b, _c;
        //get sprite coords from sprite sheet
        const sx = sprite.start.x;
        const sy = sprite.start.y;
        //calc sprite width & height
        const sw = sprite.size.x - sx;
        const sh = sprite.size.y - sy;
        //get screen position to place sprite
        const dx = position.x;
        const dy = position.y - (((_a = sprite.offset) === null || _a === void 0 ? void 0 : _a.y) || 0);
        //offset handling if exists
        const offsetX = ((_b = sprite.offset) === null || _b === void 0 ? void 0 : _b.x) || 0;
        const offsetY = ((_c = sprite.offset) === null || _c === void 0 ? void 0 : _c.y) || 0;
        //scaling image
        //const dw = sw * this.scale;
        //const dh = sh * this.scale;
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.drawImage(this.spritesheet, sx, sy, sw, sh, dx, dy, sw, sh);
        return 0;
    }
    //draw player with animations
    drawPlayer(playerPosition, isMoving, animationFrame) {
        //TODO: if reversed = true flip sprite otherwise keep it same. check boolean and if true then change sprite we sleecting but keep rest same
        const sprites = isMoving
            ? this.sprites.player.run //if moving run animation
            : this.sprites.player.idle; //if still idle
        const index = animationFrame % sprites.length; //modulo to loop animationFrames and calc which frame we need (ex: )
        const sprite = sprites[index];
        this.drawSprite(sprite, playerPosition);
    }
}
//TODO: collisions and flip player on opposite left movement
