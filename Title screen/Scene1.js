class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        

        this.load.image("background", "assets/images/background.png");
        this.load.image("Map", "assets/images/Map.png", {
            displayHeight: 2,
            displayWidth: 3
           
            
        });
        this.load.spritesheet("airship", "assets/spritesheets/airship.png", {
            frameWidth: 49,
            frameHeight: 50
        });
        this.load.spritesheet("ship2", "assets/spritesheets/ship2.png", {
            frameWidth: 190,
            frameHeight: 176
        });
        this.load.spritesheet("ship3", "assets/spritesheets/ship3.png", {
            frameWidth: 196,
            frameHeight: 157
        });
        this.load.spritesheet("explosion", "assets/spritesheets/explosion.png",{
            frameWidth: 16,
            frameHeight: 16
          });
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}