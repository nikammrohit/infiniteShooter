const canvas = document.getElementById("game");


class Game {
  ctx: CanvasRenderingContext2d

  constructor(ctx: CanvasRenderingContext2d) {
    this.ctx = ctx;
    window.addEventListener("resize", () => this.resize()); //call resize when window resizes
    requestAnimationFrame(() => this.draw()); //draw next frame before displaying the next frame
  }
  
  //update frame
  draw() {
    console.log("Drawing...");
    //fill window black
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    //create smaller white window
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width - 20, this.ctx.canvas.height - 20);

  }

  //resize screen
  resize() {
    console.log("Resizing...");
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

function start() {
  if (canvas.getContext) { // Ensure browser supports html canvas
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2d; // Access context of canvas (type assertion)

    const game = new Game(ctx);

  } else {
    console.log("This browser does not support html canvas.");
  }
}

window.addEventListener("load", start); //run "start()" on page loading

