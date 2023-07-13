import { Character } from "./Character";


export default class Bowerman extends Character {
    constructor(name, type = 'Bowman', health, level) {
        super(name, type);
        this.attack = 25;
        this.defence = 25;
        this.level = 1;
        this.health = 100;
    }
}