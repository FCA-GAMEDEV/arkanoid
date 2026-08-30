import { Scene } from "./scene.js";
import { Player } from "./player.js";
import { Ball } from "./ball.js";
import { RectManager } from "./rectManager.js";
import { sceneManager } from "./sceneManager.js";
import { graphics } from "./graphics.js";
import { collisionManager } from "./collisionManager.js";
import { input } from "./input.js";

// Em TypeScript: class Game extends Scene
export class Game extends Scene {
	constructor(level) {
		super(); // Inicializa a classe base (Scene)
		this.level = level;
		this.player = new Player(325, 500, 150, 20);
		this.ball = new Ball(375, 450, 20, 20);
		this.rectManager = new RectManager(level, 14);
		this.isPaused = false;
	}

	update() {
		// Detecta o pressionamento da tecla P (maiúscula ou minúscula) para pausar/despausar
		if (input.isKeyJustPressed("p") || input.isKeyJustPressed("P")) {
			this.isPaused = !this.isPaused;
		}

		// Se estiver pausado, interrompe a física e as atualizações do jogo
		if (this.isPaused) {
			return;
		}

		if (this.rectManager.rects.length <= 0) {
			sceneManager.changeScene(0);
		}

		this.player.update();
		this.ball.update();
		this.rectManager.update();

		collisionManager.player_vs_screen(this.player);
		collisionManager.ball_vs_screen(this.ball);
		collisionManager.ball_vs_player(this.ball, this.player);
		collisionManager.ball_vs_rects(this.ball, this.rectManager.rects);
	}

	draw() {
		graphics.drawRect(0, 0, graphics.canvas.width, graphics.canvas.height, "black");
		graphics.drawText("LEVEL 0" + this.level, 175, 300, "100px Arial", "white");

		this.player.draw();
		this.ball.draw();
		this.rectManager.draw();

		// Desenha uma sobreposição semitransparente mais sutil quando o jogo está pausado
		if (this.isPaused) {
			graphics.drawRect(0, 0, graphics.canvas.width, graphics.canvas.height, "rgba(0, 0, 0, 0.4)");
			graphics.drawText("PAUSE", 350, 50, "30px Arial", "yellow");
		}
	}
}