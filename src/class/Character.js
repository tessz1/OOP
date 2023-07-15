export class Character {
    constructor(name, type) {
        if (name.length < 2 || name.length > 10) {
            throw new Error("Некорректная длина имени. Допустимое количество символов: от 2 до 10.");
        }
        const validTypes = ["Bowman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
        if (!validTypes.includes(type)) {
            throw new Error("Некорректный тип персонажа.");
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
        // this.baseAttack = 10;
        // this.baseDefence = 10;
    }

    levelup() {
        if (this.health <= 0) {
            throw new Error("Нельзя повысить уровень умершего.");
        }
        this.level++;
        this.attack *= 1.2;
        this.defence *= 1.2;
    }

    damage(points) {
        if (this.health >= 1) {
            this.health -= points * (1 - this.defence / 100);
        }
    }
}
