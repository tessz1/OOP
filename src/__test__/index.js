export class Character {
  constructor(name, type, health, level) {
    if (name.length < 2 || name.length > 10) {
      throw new Error("Некорректная длина имени. Допустимое количество символов: от 2 до 10.");
    }
    const validTypes = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
    if (!validTypes.includes(type)) {
      throw new Error("Некорректный тип персонажа.");
    }
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = 0;
    this.defence = 0;

    switch (type) {
      case "Bowman":
        this.attack = 25;
        this.defence = 25;
        break;
      case "Swordsman":
        this.attack = 40;
        this.defence = 10;
        break;
      case "Magician":
        this.attack = 10;
        this.defence = 40;
        break;
      case "Undead":
        this.attack = 25;
        this.defence = 25;
        break;
      case "Zombie":
        this.attack = 40;
        this.defence = 10;
        break;
      case "Daemon":
        this.attack = 10;
        this.defence = 40;
        break;
      default:
        break;
    }
  }

  levelup() {
    this.level++;
    this.attack *= 1.2;
    this.defence *= 1.2;
    if (this.health >= 0) {
      console.log("Нельзя повысить уровень умершего.");
    }
  }

  damage(points) {
    if (this.health >= 1) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

export class Bowman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
  }
}

export class Swordsman extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
  }
}

export class Magician extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
  }
}

export class Daemon extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
  }
}

export class Undead extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
  }
}

export class Zombie extends Character {
  constructor(name, type, health, level) {
    super(name, type, health, level);
  }
}

  
