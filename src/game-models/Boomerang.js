class Boomerang {
  constructor() {
    this.skin = '💦 ';
    this.position = 0;
  }

  fly() {
    this.moveRight();
    this.moveLeft();
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;
