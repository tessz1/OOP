import { Character } from "./Character";


export default class Magician extends Character {
    constructor(name, type = 'Magician', level, health) {
        super(name, type);
        this.attack = 10;
        this.defence = 40;
        this.level = 1;
        this.health = 100;
    }
}