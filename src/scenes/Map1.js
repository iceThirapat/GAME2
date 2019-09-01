
let platform;
let backgroud;
let player1;
let keyA;
let keyW;
let keyS;
let keyD;
let checkpoint1;
let stat1 = false;

class Map1 extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'Map1'
        });
    }

    preload() {
        this.load.image('bg','src/image/sky.png')
        this.load.image('bg2','src/image/mountains.png')
        this.load.image('c-bg','src/image/clouds_BG.png')
        this.load.image('lonely','src/image/cloud_lonely.png')
        this.load.image('c-bg2','src/image/clouds_MG_1.png')
        this.load.image('c-bg3','src/image/clouds_MG_2.png')
        this.load.image('c-bg4','src/image/clouds_MG_3.png')
        this.load.image('ground','src/image/ground.png')
        this.load.image('platform', 'src/image/long path.png')
        this.load.spritesheet('character','src/image/PNG/Elf/elf_regular_hair.png', { frameWidth: 20, frameHeight: 20})
        this.load.spritesheet('checkpoint', 'src/image/checkpoint.png', { frameWidth: 164, frameHeight: 414 })
    }

    create() {
        backgroud=this.physics.add.staticGroup()
        backgroud.create(576,324,'bg').setScale(3)
        backgroud.create(576,324,'c-bg').setScale(3)
        backgroud.create(576,324,'bg2').setScale(3)
        backgroud.create(576,324,'c-bg4').setScale(3)   
        backgroud.create(576,324,'c-bg3').setScale(3) 
        backgroud.create(576,324,'c-bg2').setScale(3)
        backgroud.create(576,324,'lonely').setScale(3)

        platform=this.physics.add.staticGroup()
        platform.create(576,650,'ground').setScale(1.5)
        platform.create(1200, 550,'platform')
        platform.create(900, 550,'platform')
        platform.create(600, 550,'platform')
        platform.create(300, 550,'platform')

        
        player1 = this.physics.add.sprite(0,560, 'character').setScale(4)

        player1.setBounce(0.2)
        player1.setCollideWorldBounds(true)

        checkpoint1 = this.physics.add.sprite(1000, 0, 'checkpoint').setScale(0.2)
        

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('character', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'character', frame: 3 } ],
            frameRate: 20
        })
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('character', { start: 0, end: 2 }),
            frameRate: 10,
            repeat: -1
        })
        checkpoint1.anims.play('checkpoint')

        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        

        this.physics.add.collider(player1, platform)
        this.physics.add.collider(checkpoint1, platform)
        this.physics.add.overlap(player1, checkpoint1, this.nextMap)
        console.log('gs')
           
        
          
    }

    update() {
        if(keyA.isDown){
            player1.setVelocityX(-330)
            player1.anims.play('left', true)
        }else if(keyD.isDown){
            player1.setVelocityX(330)
            player1.anims.play('right', true)
        }else{
            player1.setVelocityX(0)
            player1.anims.play('turn', true)
        }

        if(keyW.isDown && player1.body.touching.down){
            player1.setVelocityY(-330)
        }
        if(stat1 == true){
            this.scene.start('Map1');
            console.log('Next Map')
        }
    
    }
    nextMap(){
        stat1 = true;
        console.log("stat1" + stat1)

    }
    
    
}

export default Map1;
