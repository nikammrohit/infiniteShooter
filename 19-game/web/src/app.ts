//Resize screen and display state
import { Game } from "./game.js";

const canvas = document.getElementById("game") as HTMLCanvasElement; //assert element is a <canvas> and therefore has getContext()

function start() {
  if (canvas.getContext) { // Ensure browser supports html canvas
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D; // Access context of canvas (type assertion)

    const spritesheet = new Image();
    spritesheet.src = "./assets/sprites/rogue/Players/players blue x3.png";

    spritesheet.onload = () => {
        const game = new Game(ctx, spritesheet);
    };

  } else {
    console.log("This browser does not support html canvas.");
  }
}

window.addEventListener("load", start); //run "start()" on page loading

