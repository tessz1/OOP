import { Character } from "./Character";


export default class Swordsman extends Character {
    constructor(name, type = 'Swordsman', health, level) {
        super(name, type);
        this.attack = 40;
        this.defence = 10;
        this.level = 1;
        this.health = 100;
    }
}