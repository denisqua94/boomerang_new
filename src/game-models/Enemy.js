


class Enemy {
  constructor() {
    this.generateSkin();
    this.position = 120;
  }

  generateSkin() {
    const skins = ['π©³', 'π', 'π', 'π', 'π₯Ό', 'π', 'π', 'π', 'π₯', 'π₯»', 'π©±', 'π©²'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // ΠΠ΄ΡΠΌ Π²Π»Π΅Π²ΠΎ.
    this.position -= 1;
  }

  die() {
    this.position = '?';
    console.log('Enemy is dead!');
  }
}

module.exports = Enemy;
