class Dino {
  constructor(image, x, y) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.width = this.image.width;
    this.height = this.image.height;
    this.gravity = 1;
    this.speedGravity = 0;
  }

  draw() {
    if (this.isAtBottom() && this.speedGravity >= 0) {
      this.speedGravity = 0;
    } else {
      this.speedGravity += this.gravity;
    }
    this.y += this.speedGravity;
    if (this.y > computedConfig.dinoY) {
      this.y = computedConfig.dinoY;
    }
    ctx.drawImage(sprite, this.image.originX, this.image.originY, this.width, this.height,
      this.x, this.y, this.width, this.height);
  }

  changeLeg() {
    if (this.image == assets.dinoLeftLegUp) {
      this.image = assets.dinoRightLegUp;
    } else {
      this.image = assets.dinoLeftLegUp;
    }
  }

  changeToStraight() {
    this.image = assets.dinoStraight;
  }

  changeToFrozen() {
    this.image = assets.dinoFrozen;
  }

  jump() {
    if (this.isAtBottom()) {
      this.speedGravity = -15;
    }
  }

  isAtBottom() {
    if (this.y == computedConfig.dinoY) {
      return true;
    } else {
      return false;
    }
  }

  closeEyes() {
    if (this.image == assets.dinoStraight) {
      this.image = assets.dinoNoeyes;
    }
  }

  openEyes() {
    if (this.image == assets.dinoNoeyes) {
      this.image = assets.dinoStraight;
    }
  }
}