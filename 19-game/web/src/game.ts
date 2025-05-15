//wire core systems together
//manage input
//redraw game by frame

import { SPRITES_96 } from "./sprites.js";
import { Vector } from "./vector.js";
import { DisplayDriver } from "./display-driver.js";

export class Game {
    private display: DisplayDriver; //instance of DisplayDriver

    constructor(private ctx: CanvasRenderingContext2d, private spritesheet: HTMLImageElement) {
        this.display = new DisplayDriver(ctx, spritesheet, {
            sprites: SPRITES_96,
        });

        window.addEventListener("resize", () => this.resize()); //call resize when window resizes
        this.resize(); //resize on page load

        requestAnimationFrame((t) => this.draw(t)); //draw next frame before displaying the next frame. t for delta time based movement
    }

    //update frame
    private draw(time: number) {
        console.log("Drawing...");
        //fill window black
        this.ctx.fillStyle = "black";
         this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        //create smaller white window
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width - 20, this.ctx.canvas.height - 20);

        this.display.draw();

        requestAnimationFrame((t) => this.draw(t));

    }

    //resize screen
    private resize() {
        console.log("Resizing...");
        const canvas = this.ctx.canvas;
        const boundingBox = canvas.parentElement!.getBoundingClientRect(); //get px size and pos of parent wrapper (full vh and vw)
        const pixelRatio = window.devicePixelRatio; //get resolution of curr display

        //set resolution
        this.ctx.canvas.width = boundingBox.width * pixelRatio; //multiply by pixel ratio
        this.ctx.canvas.height = boundingBox.height * pixelRatio;

         //set size of display
        this.ctx.canvas.style.width = `${boundingBox.width}px`;
        this.ctx.canvas.style.height = `${boundingBox.height}px`;
    }
}
