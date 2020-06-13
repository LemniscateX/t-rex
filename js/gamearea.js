class GameArea {
  constructor() {
    this.init();
  }

  init() {
    this.base = new Base(0, computedConfig.baseY);
    this.dino = new Dino(assets.dinoStraight, 10, computedConfig.dinoY);
    this.score = new Score(0, computedConfig.scoreX, 20);
    this.gameover = new Still(assets.gameOver, computedConfig.gameOverX, 120);
    this.restart = new Still(assets.restart, computedConfig.restartX, 150);
    this.cover = new Cover(computedConfig.coverX, computedConfig.coverY, computedConfig.coverWidth, computedConfig.coverHeight);
    this.cactus = [];
    this.clouds = [];
    this.frameno = 0;
    this.firstClick = false;
    this.waitTimer = null;
    this.playTimer = null;
  }

  // Some utils

  everyInterval(n) {
    if ((this.frameno / n) % 1 == 0) {
      return true;
    }
    return false;
  }

  genGap() {
    return getRandomInt(0, 200);
  }

  genCactus() {
    let type = getRandomInt(0, 1);
    let which;
    if (type == 0) {
      which = getRandomInt(0, assets.smallCactus.length - 1);
      return assets.smallCactus[which];
    } else if (type == 1) {
      which = getRandomInt(0, assets.bigCactus.length - 1);
      return assets.bigCactus[which];
    }
  }

  genY() {
    return getRandomInt(80, 180);
  }

  // Refresh each element

  clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  // When waitting
  refreshWaittingDino() {
    if (this.everyInterval(100)) {
      this.dino.closeEyes();
    }
    if (this.everyInterval(110)) {
      this.dino.openEyes();
      this.frameno = 0;
    }
    this.dino.draw();
    if (this.firstClick) {
      if (this.everyInterval(5)) {
        this.dino.changeLeg();
      }
      if (!this.dino.isAtBottom()) {
        this.dino.changeToStraight();
      }
    }
  }

  refreshWaittingBase() {
    this.base.draw();
  }

  refreshCover() {
    this.cover.draw();
    if (this.firstClick) {
      this.cover.moveRight();
    }
  }

  //  When playing
  refreshBase() {
    this.base.moveLeft();
    this.base.draw();
  }

  refreshDino() {
    if (this.everyInterval(5)) {
      this.dino.changeLeg();
    }
    if (!this.dino.isAtBottom()) {
      this.dino.changeToStraight();
    }
    this.dino.draw();
  }

  refreshCactus() {
    if (this.everyInterval(70)) {
      let c = this.genCactus();
      this.cactus.push(new Cactus(c, canvas.width + this.genGap(), canvas.height - assets.base.height - c.height + config.stuffIntoGround));
    }
    this.cactus = this.cactus.filter(item => {
      return item.x + item.width > 0;
    });
    this.cactus.forEach(item => {
      item.moveLeft();
      item.draw();
    });
  }

  refreshClouds() {
    if (this.everyInterval(150)) {
      this.clouds.push(new Cloud(canvas.width + this.genGap(), this.genY()));
    }
    this.clouds = this.clouds.filter(item => {
      return item.x + item.width > 0;
    });
    this.clouds.forEach(item => {
      item.moveLeft();
      item.draw();
    });
  }

  refreshScore() {
    if (this.everyInterval(5)) {
      this.score.num++;
    }
    this.score.draw();
  }

  // Refresh each scene
  
  // When waitting
  refreshWhenWait() {
    this.clearCanvas();
    this.refreshWaittingBase();
    this.refreshWaittingDino();
    this.refreshCover();
    this.frameno++;
    if (this.cover.isOutOfScope()) {
      this.stopWaitting();
      this.startPlaying();
    }
  }

  // When playing
  refreshWhenPlay() {
    this.clearCanvas();
    this.refreshBase();
    this.refreshCactus();
    this.refreshClouds();
    this.refreshDino();
    this.refreshScore();
    this.frameno++;
    for (let i = 0; i < this.cactus.length; i++) {
      if (twoHits(this.dino, this.cactus[i])) {
        this.stopPlaying();
        this.drawFrozenDino();
        this.drawRestart();
        document.onkeyup = (e) => {
          if (e.keyCode == 32) {
            this.init();
            this.startPlaying();
            document.onkeyup = null;
          }
        };
        return;
      }
    }
  }

  // Exchange of scenes

  startWaitting() {
    document.onkeypress = (e) => {
      if (e.keyCode == 32) {
        this.dino.jump();
        this.firstClick = true;
      }
    };

    if (!this.waitTimer) {
      this.waitTimer = setInterval(() => {
        this.refreshWhenWait();
      }, 20);
    }
  }

  stopWaitting() {
    clearInterval(this.waitTimer);
  }

  startPlaying() {
    document.onkeypress = (e) => {
      if (e.keyCode == 32) {
        this.dino.jump();
      }
    };

    if (!this.playTimer) {
      // Use anonymous function to keep "this"
      this.playTimer = setInterval(() => {
        this.refreshWhenPlay();
      }, 20);
    }
  }

  stopPlaying() {
    clearInterval(this.playTimer);
  }

  drawFrozenDino() {
    this.clearCanvas();
    this.base.draw();
    this.cactus.forEach(item => {
      item.draw();
    });
    this.clouds.forEach(item => {
      item.draw();
    });
    this.dino.changeToFrozen();
    this.dino.draw();
    this.score.draw();
  }

  drawRestart() {
    this.gameover.draw();
    this.restart.draw();
  }
}