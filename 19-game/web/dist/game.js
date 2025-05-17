//wire core systems together
//manage input
//redraw game by frame
import { SPRITES_96 } from "./sprites.js";
import { Vector } from "./vector.js";
import { DisplayDriver } from "./display-driver.js";
export class Game {
    constructor(ctx, spritesheet) {
        this.ctx = ctx;
        this.spritesheet = spritesheet;
        this.keysPressed = new Set(); //"set" to hold curr key so position retrieved every frame rather than just once on keydown
        //state
        this.isMoving = false;
        this.reversed = false;
        this.animationFrame = 0;
        this.lastAnimTime = 0;
        this.playerPosition = new Vector(100, 100); //init player position
        this.display = new DisplayDriver(ctx, spritesheet, SPRITES_96);
        window.addEventListener("resize", () => this.resize()); //call resize when window resizes
        window.addEventListener("keydown", (e) => this.keysPressed.add(e.key)); //add current key
        window.addEventListener("keyup", (e) => this.keysPressed.delete(e.key));
        this.resize(); //resize on page load
        requestAnimationFrame((t) => this.draw(t)); //draw next frame before displaying the next frame. pass in t so we can use time passed in browser
    }
    playerMovement(e) {
        const speed = 4;
        this.isMoving = false;
        if (this.keysPressed.has("ArrowUp")) {
            this.playerPosition.y -= speed;
            this.isMoving = true;
        }
        if (this.keysPressed.has("ArrowDown")) {
            this.playerPosition.y += speed;
            this.isMoving = true;
        }
        if (this.keysPressed.has("ArrowLeft")) {
            this.playerPosition.x -= speed;
            this.isMoving = true;
            this.reversed = true;
        }
        if (this.keysPressed.has("ArrowRight")) {
            this.playerPosition.x += speed;
            this.isMoving = true;
            this.reversed = false;
        }
    }
    //update frame
    draw(time) {
        this.playerMovement(); //move player based on keys
        //TODO: used delta time for frame animations
        const ANIM_SPEED = 100; //animation speed (10fps or 100ms between frames)
        if (time - this.lastAnimTime > ANIM_SPEED) { //if more than 100ms since last frame has passed then show next sprite animationFrame & reset lastAnimTime to curr time(auto given by browser)
            this.animationFrame++;
            this.lastAnimTime = time;
        }
        console.log("Drawing...");
        //fill window black
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        //create smaller white window
        this.ctx.fillStyle = "gray";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width - 20, this.ctx.canvas.height - 20);
        this.display.draw(this.playerPosition, this.isMoving, this.animationFrame); //send updated playerposition to display-driver
        requestAnimationFrame((t) => this.draw(t));
    }
    //resize screen
    resize() {
        console.log("Resizing...");
        const canvas = this.ctx.canvas;
        const boundingBox = canvas.parentElement.getBoundingClientRect(); //get px size and pos of parent wrapper (full vh and vw)
        const pixelRatio = window.devicePixelRatio; //get resolution of curr display
        //set resolution
        this.ctx.canvas.width = boundingBox.width * pixelRatio; //multiply by pixel ratio
        this.ctx.canvas.height = boundingBox.height * pixelRatio;
        //set size of display
        this.ctx.canvas.style.width = `${boundingBox.width}px`;
        this.ctx.canvas.style.height = `${boundingBox.height}px`;
    }
}
