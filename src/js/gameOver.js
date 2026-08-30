import { Scene } from "./scene.js";
import { sceneManager } from "./sceneManager.js";
import { graphics } from "./graphics.js";

// Em TypeScript: class GameOver extends Scene
export class GameOver extends Scene {
	constructor() {
		super(); // Inicializa a classe base (Scene)
		this.count = 0;
	}

	update() {
		if (this.count++ > 250) {
			sceneManager.changeScene(1);
		}
	}

	draw() {
		graphics.clear();
		graphics.drawRect(0, 0, graphics.canvas.width, graphics.canvas.height, "red");
		graphics.drawText("GAME OVER", 100, 300, "100px Arial", "black");
	}
}
