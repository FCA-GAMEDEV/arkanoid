
const GameOver = function()
{
	this.count = 0;
		
	this.update = function()
	{
		if (this.count++ > 250)
		{
			sceneManager.changeScene(1);
		}	
	}
	
	this.draw = function()
	{
		graphics.clear();
		
		graphics.drawRect(0,0,graphics.canvas.width,graphics.canvas.height,"red");
	
		graphics.drawText("GAME OVER", 100, 300, "100px Arial", "black");		
	}
}
