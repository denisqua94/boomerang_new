


class Enemy {
  constructor() {
    this.generateSkin();
    this.position = 120;
  }

  generateSkin() {
    const skins = ['🩳', '👒', '👕', '👗', '🥼', '👖', '👙', '👔', '🥋', '🥻', '🩱', '🩲'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  die() {
    this.position = '?';
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
