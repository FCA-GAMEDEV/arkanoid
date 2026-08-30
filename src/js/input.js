import { graphics } from "./graphics.js";

export const input = {
	keys: {},
	previousKeys: {},
	mouseX: 0,
	mousePress: false,
	
	isKeyDown(key) {
		return this.keys[key] === true;
	},

	// Retorna true apenas no frame em que a tecla começou a ser pressionada
	// Excelente para ações do tipo "toggle" (como pausar o jogo ou abrir menus)
	isKeyJustPressed(key) {
		return this.keys[key] === true && !this.previousKeys[key];
	},

	// Copia o estado atual das teclas para o histórico (deve ser chamado no fim do loop)
	update() {
		this.previousKeys = { ...this.keys };
	}
};

window.addEventListener('keydown', (e) => {
	input.keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
	input.keys[e.key] = false;
});

graphics.canvas.addEventListener('mousemove', (e) => {
	// e.offsetX grives coordinates relative to the canvas border, which is more accurate
	input.mouseX = e.offsetX;
});

graphics.canvas.addEventListener('mousedown', (e) => {
	if (e.button === 0) {
		input.mousePress = true;
	}
});

graphics.canvas.addEventListener('mouseup', (e) => {
	if (e.button === 0) {
		input.mousePress = false;
	}
});
