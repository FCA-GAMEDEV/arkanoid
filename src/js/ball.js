import { GameObject } from "./gameObject.js";
import { graphics } from "./graphics.js";

// Em TypeScript: class Ball extends GameObject
export class Ball extends GameObject {
	constructor(x, y, w, h) {
		super(x, y, w, h); // Inicializa a classe base (GameObject)
		this.speedx = 5;
		this.speedy = -5;
		this.speedRot = 5;
		this.angle = 0;
	}

	getInfo() {
		super.getInfo("ball"); // Chama o método da classe base
	}

	update() {
		this.x += this.speedx;
		this.y += this.speedy;
		this.angle += this.speedRot;
	}

	draw() {
		graphics.ctx.save();
		graphics.ctx.translate(this.x, this.y);
		graphics.ctx.rotate(this.angle * Math.PI / 180);
		// this.w representa o raio da bola
		graphics.drawCircle(0, 0, this.w, 0, Math.PI, "lightgray");
		graphics.drawCircle(0, 0, this.w, Math.PI, Math.PI * 2, "brown");
		graphics.ctx.restore();
	}
}