class Base {
  constructor(x, y) {
    this.image = assets.base;
    this.x = x;
    this.y = y;
    this.width = this.image.width;
    this.height = this.image.height;
  }

  draw() {
    ctx.drawImage(sprite, this.image.originX, this.image.originY, this.width, this.height,
      this.x, this.y, this.width, this.height);
    ctx.drawImage(sprite, this.image.originX, this.image.originY, this.width, this.height,
      this.x + this.width, this.y, this.width, this.height);
  }

  moveLeft() {
    this.x -= config.moveLeftSpeed;
    if (this.x == -(this.width)) {
      this.x = 0;
    }
  }
}