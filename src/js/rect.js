import { GameObject } from "./gameObject.js";
import { graphics } from "./graphics.js";

// Em TypeScript: class Rect extends GameObject
export class Rect extends GameObject {
	constructor(x, y, w, h, color) {
		super(x, y, w, h); // Inicializa a classe base (GameObject)
		this.color = color;
	}

	getInfo() {
		super.getInfo("rect"); // Chama o método da classe base
	}

	update() {
		// Bloco estático, nenhuma lógica de atualização por enquanto
	}

	draw() {
		graphics.ctx.save();
		graphics.ctx.translate(this.x, this.y);
		graphics.drawRect(0, 0, this.w, this.h, this.color);
		graphics.ctx.restore();
	}
}