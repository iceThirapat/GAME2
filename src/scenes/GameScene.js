//let platform;
//let backgroud;
let bg;
let monsters;
//let game = new Phaser.Game(config);
let ship;
let keyA;
let keyW;
let keyS;
let keyD;
let bullets;
let life;

// let checkpoint1;
// let stat1 = false;


class GameScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'GameScene'
        });
    }

    preload() {
        this.load.image('bg','src/image/Parallax100.png')
        this.load.spritesheet('bullet','src/image/PNG/Pig/pig.png', { frameWidth: 20, frameHeight: 20})
        
        this.load.spritesheet('ship2','src/image/ships.png', { frameWidth: 256, frameHeight:277.33})
        this.load.spritesheet('ship1','src/image/ships2.png', { frameWidth: 256, frameHeight:277.33})
        this.load.spritesheet('monster','src/image/character.png', { frameWidth: 68, frameHeight: 68})
        this.load.spritesheet('character','src/image/PNG/Elf/elf_regular_hair.png', { frameWidth: 20, frameHeight: 20})
        
    }

    create() {        
        this.bg=this.add.tileSprite(0,0,1600,1600,"bg")
        this.bg.setOrigin(0,0);
        monsters=this.physics.add.sprite(300,-100,'ship2').setScale(0.5).setSize(20,20)
       
        life=true;
        this.anims.create({
            key: 'ship2',
            frames: [ { key: 'ship2', frame: 1 } ],
            frameRate: 7,
            yoyo: false,
            repeat: -1
        })
        
        monsters.anims.play('ship2')
        
      
        
        //ship=this.physics.add.sprite(300,850,'ship1').setScale(0.5)
        
      
        
        
        ship = this.physics.add.sprite(300,850,'ship1').setScale(0.5)
        this.input.on('pointermove', (pointer) => {

            ship.x = pointer.x;
            
        });
        
        if(life==true) {
        
            bullets = this.physics.add.sprite(ship.x,ship.y,'bullet').setScale(0.5)
        bullets.setVelocityY(-30)
           
        
        }
       
        
     

       
     


        //player1.setBounce(0.2)
        ship.setCollideWorldBounds(true)
        //ship.setdata(true)

        

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('ship1', { start: 0, end: 0 }),
            frameRate: 10,
            repeat: -1
        })
        
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'ship1', frame: 0 } ],
            frameRate: 20
        })
        
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('ship1', { start: 0, end: 0 }),
            frameRate: 10,
            repeat: -1
        })

        // this.anims.create({
        //     key: 'checkpoint',
        //     frames: this.anims.generateFrameNumbers('checkpoint'),
        //     frameRate: 7,
        //     yoyo: false,
        //     repeat: -1
        // })
        

        
        

        // keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        // keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        // keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        // keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        

        this.physics.add.collider(ship,monsters)
        // this.physics.add.collider(checkpoint1, platform)
        // this.physics.add.overlap(player1, checkpoint1, this.nextMap)
        // console.log('gs')
           
        

    }
    
    update() {
        this.bg.tilePositionY -= 0.5
        monsters.setVelocityY(50)
        
        if( monsters.y>850) {
            monsters=this.physics.add.sprite(300,-100,'ship2').setScale(0.5)
              
        this.anims.create({
            key: 'ship2',
            frames: [ { key: 'ship2', frame: 1 } ],
            frameRate: 7,
            yoyo: false,
            repeat: -1
        })
        
        monsters.anims.play('ship2')
          }
        // //if(this.monsters.setVelocityY(50));
        // if(keyA.isDown){
        //     ship.setVelocityX(-500)
        //     ship.anims.play('left', true)
        // }else if(keyD.isDown){
        //     ship.setVelocityX(500)
        //     ship.anims.play('right', true)
        // }else if(keyS.isDown){
        //     player1.setVelocityY(+330)
        //     player1.anims.play('turn',true)
        // }else {
        //     ship.setVelocity(0,0)
        //     ship.anims.play('turn', true)
        // }
       

        // if(keyW.isDown /*&& player1.body.touching.down*/){
        //     player1.setVelocityY(-330)
        // }
        // if(stat1 == true){
        //     this.scene.start('Map1');
        //     console.log('Next Map')
        // }
        
    
    }
    // nextMap(){
    //     // stat1 = true;
    //     // console.log("stat1" + stat1)

    //     // if(stat1 == true){
    //     // }

    // }
    
    
}

export default GameScene;
