import { Rect } from "./rect.js";

// Classe gerenciadora que não precisa herdar de GameObject, 
// pois não representa uma única entidade física na tela, mas sim um grupo de blocos.
export class RectManager {
	constructor(row, column) {
		this.color = ["RED", "YELLOW", "BLUE", "LIME"];
		this.rects = [];

		// Gera a grade de blocos
		for (let i = 0; i < row; i++) {
			for (let j = 0; j < column; j++) {
				this.rects.push(new Rect(40 + (j * 51), 50 + (i * 41), 50, 40, this.color[i % 4]));
			}
		}
	}

	update() {
		for (let i = 0; i < this.rects.length; i++) {
			this.rects[i].update();
		}
	}

	draw() {
		for (let i = 0; i < this.rects.length; i++) {
			this.rects[i].draw();
		}
	}
}