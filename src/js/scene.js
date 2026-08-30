// Em TypeScript, esta seria uma classe abstrata (abstract class Scene).
// Todas as cenas do jogo (Opening, Game, Congrats, GameOver) herdam dela.
//
// Exemplo em TypeScript:
// abstract class Scene {
//     abstract update(): void;
//     abstract draw(): void;
// }

export class Scene {
	constructor() {
		// Construtor vazio na classe base
	}

	// Métodos que as cenas filhas devem obrigatoriamente implementar (sobrescrever)
	update() {
		console.log("update: somente um exemplo!");
	}

	draw() {
		console.log("draw: somente um exemplo!");
	}
}