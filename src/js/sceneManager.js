
const SceneManager = function()
{
	this.currentScene;
	this.scene;
	
	this.keyLeft = false;
	this.keyRight = false;
	
	this.mouseX = 0;
	this.mousePress = false;
	
	this.currentLevel = 1;
	this.MAX_LEVEL = 8;
	
	this.setup = function()
	{
		this.scene = new Opening();
		this.currentScene = "opening";
	}

	this.update = function()
	{
		this.scene.update();
	}
	
	this.draw = function()
	{
		this.scene.draw();
	}
	
	this.changeScene = function(option)
	{
		switch(this.currentScene)
		{
			case "opening":
				this.scene = new Game(this.currentLevel++);
				this.currentScene = "game";
				break;
				
			case "game":
				switch (option)
				{
					case 0:
						if (this.currentLevel <= this.MAX_LEVEL)
						{
							this.scene = new Game(this.currentLevel++);
							this.currentScene = "game";
						}
						else
						{
							this.currentLevel = 1;
							this.scene = new Congrats();
							this.currentScene = "congrats";
						}
						break;
						
					case 1:
						this.currentLevel = 1;
						this.scene = new GameOver();
						this.currentScene = "gameover";
						break;
					
					default:
						this.currentLevel = 1;
						this.scene = new GameOver();
						this.currentScene = "gameover";
						break;						
				}
				break;
				
			case "congrats":	
			case "gameover":
			default:
				this.scene = new Opening();
				this.currentScene = "opening";
				break;
		}
	}
}

const sceneManager = new SceneManager();
sceneManager.setup();
	