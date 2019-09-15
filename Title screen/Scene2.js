

class Scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }
    

    create(){
        this.background = this.add.tileSprite(0,0, config.width, config.height, "background");
        this.background.setOrigin(0,0);

        this.Map = this.add.image(config.width/2, config.height/2, "Map");
        this.Map.setScale(1);
        
        

        this.ship1 = this.add.sprite(config.width/2 - 65, config.height/2, "airship");
        this.ship2 = this.add.sprite(config.width - 75, config.height/3, "ship2");
        this.ship3 = this.add.sprite(config.width  - 90, config.height/2, "ship3");

        this.anims.create({
            key: "ship1_anim",
            frames: this.anims.generateFrameNumbers("airship"),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: "ship2_anim",
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: "ship3_anim",
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 10,
            repeat: 0,
            hideOnComplete: true
        });

        this.ship1.play("ship1_anim");
        this.ship2.play("ship2_anim");
        this.ship3.play("ship3_anim");

        this.ship1.setInteractive();
        this.ship2.setInteractive();
        this.ship3.setInteractive();

        this.input.on('gameobjectdown', this.destroyShip, this);



        this.add.text(240, 210, 'Eternal Realms', {
            font: "100px font1",
            fill: "red"
            
             
        });

        this.add.text(430,550, 'Begin your Adventure',{
            font: "35px font1",
            fill: "black"
        })
    }


    

    update() {



        this.moveShip2(this.ship1, 1);
        this.moveShip2(this.ship2, 2);
        this.moveShip(this.ship3, 3);

        this.background.tilePositionY -= 0.5;
    }

    moveShip(ship, speed) {
        ship.x += speed;
        if (ship.x > config.width) {
            this.resetShipPos(ship);
        }
    }

    moveShip2(ship, speed) {
        ship.x -= speed;
        if (ship.x < 0) {
            this.resetShipPos2(ship);
        }
    }

    resetShipPos2(ship) {
        ship.x = config.width;
        var randomY = Phaser.Math.Between(0, config.height);
        ship.y = randomY;
    }

    resetShipPos(ship) {
        ship.x = 0;
        var randomY = Phaser.Math.Between(0, config.height);
        ship.y = randomY;
    }

    destroyShip(pointer, gameObject) {
        gameObject.setTexture("explosion");
        gameObject.play("explode");
    }
}