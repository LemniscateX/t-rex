class Cloud {
  constructor(x, y) {
    this.image = assets.cloud;
    this.x = x;
    this.y = y;
    this.width = this.image.width;
    this.height = this.image.height;
  }

  draw() {
    ctx.drawImage(sprite, this.image.originX, this.image.originY, this.width, this.height,
      this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    this.x -= config.moveLeftSpeed / 3;
  }
}