import { sceneManager } from "./sceneManager.js";
import { graphics } from "./graphics.js";
import { input } from "./input.js";

// Game Loop
function loop() {
	sceneManager.update();
	sceneManager.draw();
	
	// Desenha a imagem de perfil do Facebook caso esteja logado
	if (window.fb_logged && window.fb_image) {
		graphics.ctx.drawImage(window.fb_image, 10, 540, 50, 50);
	}
	
	input.update();
	requestAnimationFrame(loop);
}

// Inicializa o game loop nativo
requestAnimationFrame(loop);
