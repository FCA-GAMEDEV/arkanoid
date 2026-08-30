import { graphics } from "./graphics.js";
import { sceneManager } from "./sceneManager.js";

export class CollisionManager {
	ball_vs_screen(ball) {
		if (ball.x - ball.w < 0) {	
			ball.x = ball.w;
			ball.speedx *= -1;
			ball.speedRot *= -1;
		} else if (ball.x + ball.w > graphics.canvas.width) {	
			ball.x = graphics.canvas.width - ball.w;
			ball.speedx *= -1;
			ball.speedRot *= -1;
		}
			
		if (ball.y - ball.w < 0) {
			ball.y = ball.w;
			ball.speedy *= -1;
			ball.speedRot *= -1;
		} else if (ball.y - ball.w > graphics.canvas.height) {
			sceneManager.changeScene(1);
		}
	}
	
	player_vs_screen(player) {
		if (player.x < 0) {	
			player.x = 0;
		} else if (player.x + player.w > graphics.canvas.width) {	
			player.x = graphics.canvas.width - player.w;
		}
	}	
	
	ball_vs_player(ball, player) {
		if (ball.y < player.y + player.h) {
			if (ball.x - ball.w < player.x + player.w &&
				ball.x + ball.w > player.x &&
				ball.y - ball.w < player.y + player.h &&
				ball.y + ball.w > player.y) {
				
				if (ball.x < player.x && ball.speedx > 0) {
					ball.speedx *= -1;
				} else if (ball.x > player.x + player.w && ball.speedx < 0) {
					ball.speedx *= -1;
				}			
				
				ball.speedy *= -1;
				ball.speedRot *= -1;
			}		
		}
	}
	
	ball_vs_rects(ball, rects) {
		for (let i = 0; i < rects.length; i++) {
			if (ball.x - ball.w < rects[i].x + rects[i].w &&
				ball.x + ball.w > rects[i].x &&
				ball.y - ball.w < rects[i].y + rects[i].h &&
				ball.y + ball.w > rects[i].y) {
				
				ball.speedy *= -1;
				ball.speedRot *= -1;
				
				rects.splice(i, 1);
				break;
			}
		}
	}	
}

export const collisionManager = new CollisionManager();