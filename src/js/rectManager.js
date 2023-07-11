
const RectManager = function(row,column)
{
	this.color = ["RED","YELLOW","BLUE","LIME"];

	this.rects = new Array();

	for (let i = 0; i < row; i++)
	{
		for(let j = 0; j < column; j++)
		{	
			this.rects.push(new Rect(40+(j*51),50+(i*41),50,40,this.color[i%4]));
		}
	}

	this.update = function()
	{
		for (const i = 0; i < this.rects.length; i++)
		{
			this.rects[i].update();		
		}
	}

	this.draw = function()
	{
		for (let i = 0; i < this.rects.length; i++)
		{
			this.rects[i].draw();
		}
	}	
}