
const CollisionManager = function()
{
	this.ball_vs_screen = function(ball)
	{
		if (ball.go.x - ball.go.w < 0)
		{	
			ball.go.x = ball.go.w;
			ball.speedx *= -1;
			ball.speedRot *= -1;
		}
		else if (ball.go.x + ball.go.w > graphics.canvas.width)
		{	
			ball.go.x = graphics.canvas.width - ball.go.w;
			ball.speedx *= -1;
			ball.speedRot *= -1;
		}
			
		if (ball.go.y - ball.go.w < 0)
		{
			ball.go.y = ball.go.w;
			ball.speedy *= -1;
			ball.speedRot *= -1;
		}
		else if (ball.go.y - ball.go.w > graphics.canvas.height)
		{
			sceneManager.changeScene(1);
		}
	}
	
	this.player_vs_screen = function(player)
	{
		if (player.go.x < 0)
		{	
			player.go.x = 0;
		}
		else if (player.go.x + player.go.w > graphics.canvas.width)
		{	
			player.go.x = graphics.canvas.width - player.go.w;
		}
	}	
	
	this.ball_vs_player = function(ball, player)
	{
		if (ball.go.y < player.go.y + player.go.h)
		{
			if (ball.go.x - ball.go.w < player.go.x + player.go.w &&
				ball.go.x + ball.go.w > player.go.x &&
				ball.go.y - ball.go.w < player.go.y + player.go.w &&
				ball.go.y + ball.go.w > player.go.y)
			{
				if (ball.go.x < player.go.x &&
					ball.speedx > 0)
				{
					ball.speedx *= -1;
				}			
				else if (ball.go.x > player.go.x + player.go.w &&
					ball.speedx < 0)
				{
					ball.speedx *= -1;
				}			
				
				ball.speedy *= -1;
				ball.speedRot *= -1;
			}		
		}
	}
	
	this.ball_vs_rects = function(ball, rects)
	{
		//console.log("teste: " + rects.length);
		
		for (let i = 0; i < rects.length; i++)
		{
			if (ball.go.x - ball.go.w < rects[i].go.x + rects[i].go.w &&
				ball.go.x + ball.go.w > rects[i].go.x &&
				ball.go.y - ball.go.w < rects[i].go.y + rects[i].go.w &&
				ball.go.y + ball.go.w > rects[i].go.y)
			{
				ball.speedy *= -1;
				ball.speedRot *= -1;
				
				rects.splice(i,1);
				break;
			}
		}
	}	
}

const collisionManager = new CollisionManager();