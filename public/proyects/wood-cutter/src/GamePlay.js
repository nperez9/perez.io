const STATE_NONE = 0;
const STATE_LOAD = 1;
const STATE_PLAYING = 2;
const STATE_WIN = 3;
const STATE_LOSE = 4;

const trunkDistance = 70;
let currentState = STATE_NONE;

const GamePlayManager = {
  init: function () {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    this.cursors = game.input.keyboard.createCursorKeys();
    this.isPressKey = false;
  },
  preload: function () {
    // carga imagenes 
    game.load.image("background", "assets/images/background.png");
    game.load.image("man_stand", "assets/images/man_stand.png");
    game.load.image('man_hit', 'assets/images/man_hit.png');
    game.load.image('trunk', 'assets/images/trunk.png');
    game.load.image('tomb', 'assets/images/tomb.png');

    // Carga sonidos 
    game.load.audio('loop_sound', 'assets/sounds/musicLoop.mp3');
    game.load.audio('gameOver', 'assets/sounds/sfxGameOver.mp3');
    game.load.audio('hit', 'assets/sounds/sfxHit.mp3');

    game.load.spritesheet("buttonPlay", "assets/images/buttonPlay.png", 65, 65, 2);
  },

  create: function () {
    this.secuence = [];
    game.add.sprite(0, 0, "background");
    // MAN
    this.man = game.add.sprite(80, 460, "man_stand");
    //game.add.sprite(80, 460, "man_stand");
    this.man.anchor.setTo(0.5, 1);
    // BUTTOn
    this.buttonPlay = game.add.button(game.width / 2, game.height / 2, "buttonPlay",
      this.startGame, this, 1, 0, 1, 0);
    this.buttonPlay.anchor.setTo(0.5);

    // Trunk
    this.trunks = game.add.group();
    startTrunks(this.trunks);

    // tomb
    this.tomb = game.add.sprite(80, 460, 'tomb');
    this.tomb.anchor.setTo(0.5, 1);
    this.tomb.visible = false;

    // carga sonidos
    this.loopMusic = game.add.sound('loop_music');
    this.gameOverSound = game.add.sound('gameOver');
    this.hitSound = game.add.sound('hit');

    // paint counter
    let style = {
      fill: '#FFFFFF',
    }
    this.pointCounter = game.add.text(game.width / 2, 10, 0, style);
    this.pointCounter.anchor.setTo(0.5, 0);

    // timebar
    let pixel = game.add.bitmapData(1, 1);
    pixel.ctx.fillStyle = '#A0221E';
    pixel.ctx.fillRect(0, 0, 1, 1);

    this.timeBar = game.add.sprite(0, 0, pixel);
    this.timeBar.anchor.setTo(0);
    this.timeBar.width = game.width;
    this.timeBar.height = 10;

    this.startGame();
  },

  startGame: function () {
    currentState = STATE_PLAYING;
    this.buttonPlay.visible = false;

    // Musiquita de fondo (tutututu)
    this.loopMusic.loop = true;
    this.loopMusic.play();

    // clear beforeGame trunks 
    this.secuence.forEach(t => {
      if (t)
        t.kill();
    });

    this.man.visible = true;
    this.tomb.visible = false;

    this.score = 0;
    this.pointCounter.text = this.score.toString();
    this.timeBar.width = game.width;

    this.secuence = [];
    this.secuence.push(null);
    this.secuence.push(null);
    addTrunks(this, 10);
  },

  gameOver: function () {
    this.gameOverSound.play();

    this.man.visible = false;
    this.tomb.visible = true;
    this.tomb.x = this.man.x;
    currentState = STATE_LOSE;

    this.buttonPlay.visible = true;
  },

  update: function () {
    switch (currentState) {
      case STATE_NONE:

        break;
      case STATE_LOAD:
        break;
      case STATE_PLAYING:
        refreshBar.call(this, -0.5);
        
        if (!this.isPressKey) {
          if (this.cursors.left.isDown) {
            this.isPressKey = true;
            this.man.x = 80;
            this.man.scale.setTo(1);
            this.man.loadTexture('man_hit');
            hitMan.call(this, -1);
          }
          if (this.cursors.right.isDown) {
            this.isPressKey = true;
            this.man.x = 240;
            this.man.scale.setTo(-1, 1);
            this.man.loadTexture('man_hit');
            hitMan.call(this, 1);
          }
        }
        if (this.cursors.right.isUp && this.cursors.left.isUp) {
          this.isPressKey = false;
          this.man.loadTexture('man_stand');
        }
        break;
      case STATE_LOSE:

        break;
    }
  }
};

const game = new Phaser.Game(320, 480, Phaser.AUTO);

game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");

function startTrunks(trunksGroup) {
  for (let i = 0; i < 30; i++) {
    const trunk = trunksGroup.create(0, 0, 'trunk');
    trunk.anchor.setTo(0, 0.5);
    trunk.kill();
  }
}

function addTrunks(gamePM, cant) {
  try {
    for (let i = 0; i < cant; i++) {
      let trunkEnd = 380;
      let trunk = gamePM.trunks.getFirstDead();
      let number = game.rnd.integerInRange(-1, 1);

      switch (number) {
        case 1:
          trunk.direction = 1;
          trunk.scale.setTo(1, 1);
          trunk.reset(game.world.centerX, trunkEnd - (gamePM.secuence.length) * trunkDistance);
          gamePM.secuence.push(trunk);
          break;
        case -1:
          trunk.direction = -1;
          trunk.scale.setTo(-1, 1);
          trunk.reset(game.world.centerX, trunkEnd - (gamePM.secuence.length) * trunkDistance);
          gamePM.secuence.push(trunk);
          break;
        default:
          gamePM.secuence.push(null);
          break;
      }
    }
  } catch (e) {
    console.error('Error adding trunk | ', e);
    console.error('cant | ', cant);
    console.error('GPM | ', gamePM);
  }
}

function hitMan(direction) {
  try {
    //console.log(this.secuence.map(s => (s) ? s.direction : 0));
    this.hitSound.play();

    this.secuence.forEach(element => {
      if (element != null)
        element.y += trunkDistance;
    });

    let firstTrunk = this.secuence.shift();

    if (firstTrunk != null)
      firstTrunk.kill();

    if (this.secuence[0] && this.secuence[0].direction == direction) {
      console.log('GAME OVER');
      this.gameOver();
    } else {
      refreshBar.call(this, 8);
      sumScore.call(this, 100);
    }

    addTrunks(this, 1);
  }
  catch (e) {
    console.error(e);
  }
}

function sumScore(points) {
  if (!points) points = 100;

  this.score += points;
  this.pointCounter.text = this.score;
}

function refreshBar(value) {
  let newWidth = this.timeBar.width + value;
  if (newWidth > game.width) {
    newWidth = game.width;
  } else if (newWidth <= 0) {
    newWidth = 0;
    this.gameOver();
  }
  else {
    this.timeBar.width = newWidth;
  }
}