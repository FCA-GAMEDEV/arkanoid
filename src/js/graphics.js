export class Graphics {
	constructor() {
		this.canvas = document.getElementById("myCanvas");
		this.ctx = this.canvas.getContext("2d");
	}

	clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.fillStyle = "white";
	}

	drawText(text, x, y, font, color) {
		this.ctx.fillStyle = color;
		this.ctx.font = font;
		this.ctx.fillText(text, x, y);	
	}

	drawCircle(x, y, r, start, stop, color) {
		this.ctx.fillStyle = color;
		this.ctx.beginPath();
		this.ctx.arc(x, y, r, start, stop);
		this.ctx.fill();
	}

	drawRect(x, y, w, h, color) {
		this.ctx.fillStyle = color;
		this.ctx.fillRect(x, y, w, h);	
	}
}

export const graphics = new Graphics();