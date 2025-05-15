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
        this.playerPosition = new Vector(100, 100); //init player position
        this.display = new DisplayDriver(ctx, spritesheet, {
            sprites: SPRITES_96,
        });
        window.addEventListener("resize", () => this.resize()); //call resize when window resizes
        window.addEventListener("keydown", (e) => this.keysPressed.add(e.key)); //add current key
        window.addEventListener("keyup", (e) => this.keysPressed.delete(e.key));
        this.resize(); //resize on page load
        requestAnimationFrame((t) => this.draw(t)); //draw next frame before displaying the next frame. t for delta time based movement
    }
    playerMovement(e) {
        const speed = 4;
        if (this.keysPressed.has("ArrowUp"))
            this.playerPosition.y -= speed;
        if (this.keysPressed.has("ArrowDown"))
            this.playerPosition.y += speed;
        if (this.keysPressed.has("ArrowLeft"))
            this.playerPosition.x -= speed;
        if (this.keysPressed.has("ArrowRight"))
            this.playerPosition.x += speed;
    }
    //update frame
    draw(time) {
        this.playerMovement(); //move player based on keys
        console.log("Drawing...");
        //fill window black
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        //create smaller white window
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width - 20, this.ctx.canvas.height - 20);
        this.display.draw(this.playerPosition); //send updated playerposition to display-driver
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
