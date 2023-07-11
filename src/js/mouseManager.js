
const MouseManager = function()
{
	//mouse = new Object();
	//x = 0;
	//y = 0;
	//press = false;
	
	this._mouseMove = function(e) 
	{
		//x = e.x;
		//y = e.y;
		sceneManager.mouseX = e.x;
	}	
	
	this._mouseDown = function(e)
	{
		switch (e.button)
		{
			case 0:
				sceneManager.mousePress = true;
				break;
		}
	}
	
	this._mouseUp = function(e)
	{
		switch (e.button)
		{
			case 0:
				sceneManager.mousePress = false;
				break;
		}
	}
}

const mouseManager = new MouseManager();

graphics.canvas.addEventListener('mousemove', mouseManager._mouseMove, false);
graphics.canvas.addEventListener('mouseup', mouseManager._mouseUp, false);
graphics.canvas.addEventListener('mousedown', mouseManager._mouseDown, false);
	