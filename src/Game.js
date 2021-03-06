// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const Boomerang = require('./game-models/Boomerang');
const View = require('./View');
const {keyboard} = require('./keyboard.js');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor() {
    this.trackLength = 150;
    this.hero = new Hero(); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.view = new View();
    this.boomerang = new Boomerang()
    this.track = [];
    this.regenerateTrack();
   
  }


    regenerateTrack() {
        // Сборка всего необходимого (герой, враг(и), оружие)
        // в единую структуру данных
        this.track = new Array(this.trackLength).fill(" ");
        this.track[this.hero.position] = this.hero.skin;
        this.track[this.enemy.position] = this.enemy.skin;
        this.track[this.boomerang.position] = this.boomerang.skin;
    }

    check() {
        if (this.enemy.position > this.hero.position) {
            this.enemy.moveLeft();
        }

        if (this.hero.position === this.enemy.position) {
            this.hero.die();
        }

        if (this.enemy.position > this.boomerang.position) {
            this.boomerang.moveRight();
        } else if ((this.enemy.position = this.boomerang.position)) {
            this.enemy.die();
            this.boomerang.moveLeft();
        }
        if (this.boomerang.position === this.hero.position) {
            this.boomerang.position = "?";
            // this.enemy.skin = this.generateSkin()
        }
    }

    play() {
      // keyboard.runInteractiveConsole(this.hero);
      setInterval(() => {
        // Let's play!
        this.check();
        this.regenerateTrack();
        this.view.render(this.track);
      }, 50);
    }
  }
  

module.exports = Game;
