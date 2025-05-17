export class DisplayDriver {
    //recieves ctx, spritesheet, and SpritePreset(the vector data) by reference from Game obj instantiation to use
    constructor(ctx, spritesheet, sprites) {
        this.ctx = ctx;
        this.spritesheet = spritesheet;
        this.sprites = sprites;
    }
    ;
    draw(playerPosition, isMoving, isReversed, animationFrame) {
        this.drawPlayer(playerPosition, isMoving, isReversed, animationFrame);
    }
    //blueprint to draw sprite on screen
    //calculate width and height for each sprite (since it is diff for each animation frame)
    drawSprite(sprite, position, isReversed) {
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
    drawPlayer(playerPosition, isMoving, isReversed, animationFrame) {
        const sprites = isMoving
            ? this.sprites.player.run //if moving run animation
            : this.sprites.player.idle; //if still idle
        const index = animationFrame % sprites.length; //modulo to loop animationFrames and calc which frame we need
        const sprite = sprites[index];
        this.drawSprite(sprite, playerPosition, isReversed);
    }
}
//TODO: collisions and flip player on opposite left movement
