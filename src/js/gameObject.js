// Em TypeScript, esta seria uma classe abstrata (abstract class GameObject).
// Ela serve de modelo para todos os objetos do jogo.
// 
// Exemplo em TypeScript:
// abstract class GameObject {
//     constructor(public x: number, public y: number, public w: number, public h: number) {}
//     abstract update(): void;
//     abstract draw(): void;
// }

export class GameObject {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	getInfo(object) {
		console.log(object + 
					" x: " + this.x + 
					" y: " + this.y +
					" w: " + this.w +
					" h: " + this.h);
	}

	// Métodos que as classes filhas (Player, Ball, Rect) devem implementar (sobrescrever)
	update() {
		// Deixamos vazio na classe base
	}

	draw() {
		// Deixamos vazio na classe base
	}
}