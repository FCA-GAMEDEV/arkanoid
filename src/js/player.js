
const Player = function(x,y,w,h)
{
	this.go = new GameObject(x,y,w,h);
	
	this.speedx = 10;
	this.speedy = 10;
	
	this.getInfo = function()
	{
		this.go.getInfo("player");
	}
	
	/*
	this.ia = function(ball)
	{
		this.go.x = ball.go.x - (this.go.w/2);
	}
	*/
	
	this.update = function()
	{		
		if (sceneManager.keyLeft == true)
		{
			this.go.x -= this.speedx;
		}

		if (sceneManager.keyRight == true)
		{
			this.go.x += this.speedx;
		}
	}
	
	this.draw = function()
	{
		graphics.ctx.save();		
		
		graphics.ctx.translate(this.go.x, this.go.y);
		graphics.drawRect(0,0,this.go.w,this.go.h,"orange");
		
		graphics.ctx.restore();
	}
}