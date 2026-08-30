import { GameObject } from "./gameObject.js";
import { input } from "./input.js";
import { graphics } from "./graphics.js";

// Em TypeScript: class Player extends GameObject
export class Player extends GameObject {
	constructor(x, y, w, h) {
		super(x, y, w, h); // Inicializa a classe base (GameObject)
		this.speedx = 10;
		this.speedy = 10;
	}

	getInfo() {
		super.getInfo("player"); // Chama o método da classe base
	}

	update() {
		if (input.isKeyDown("ArrowLeft")) {
			this.x -= this.speedx;
		}

		if (input.isKeyDown("ArrowRight")) {
			this.x += this.speedx;
		}

		/*
		if (input.mousePress === true) {
			if (input.mouseX < graphics.canvas.width / 2) {
				this.x -= this.speedx;
			} else {
				this.x += this.speedx;
			}
		}
		*/
	}

	draw() {
		graphics.ctx.save();
		// Agora usamos this.x e this.y diretamente por causa da herança!
		graphics.ctx.translate(this.x, this.y);
		graphics.drawRect(0, 0, this.w, this.h, "orange");
		graphics.ctx.restore();
	}
}
