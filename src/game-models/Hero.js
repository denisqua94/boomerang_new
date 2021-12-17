// Наш герой.

class Hero {
    constructor() {
        this.skin = "🦝"; // можете использовать любые emoji '💃'
        this.position = 0;
    }

    moveLeft() {
        // Идём влево.
        this.position -= 1;
    }

    moveRight() {
        // Идём вправо.
        this.position += 1;
    }

    moveDown() {}

    moveUp() {}

    attack() {
        // Атакуем.
        this.boomerang.fly();
    }

    die() {
        this.skin = "💀";
        console.log("YOU ARE DEAD!💀");
        process.exit();
    }
}

module.exports = Hero;