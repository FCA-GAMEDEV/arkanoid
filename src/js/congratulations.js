import { Scene } from "./scene.js";
import { sceneManager } from "./sceneManager.js";
import { graphics } from "./graphics.js";

// Em TypeScript: class Congrats extends Scene
export class Congrats extends Scene {
	constructor() {
		super(); // Inicializa a classe base (Scene)
		this.count = 0;
	}

	update() {
		if (this.count++ > 250) {
			sceneManager.changeScene(0);
		}
	}

	draw() {
		graphics.clear();
		graphics.drawRect(0, 0, graphics.canvas.width, graphics.canvas.height, "yellow");
		graphics.drawText("CONGRATULATIONS", 20, 300, "75px Arial", "black");
	}
}