import { Character } from "./Character";


export default class Zombie extends Character {
    constructor(name, type = 'Zombie', health, level) {
        super(name, type);
        this.attack = 40;
        this.defence = 10;
        this.health = 100;
        this.level = 1;
    }
}