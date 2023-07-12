import { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from  './index.js'

describe('Characterm', () => {
    test('should create valid name', () => {
        const character = new Character('John', 'Swordsman', 100, 1);

        expect(character.name).toBe('John');
        expect(character.type).toBe('Swordsman');
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
        expect(character.attack).toBe(40);
        expect(character.defence).toBe(10);
    })
})

test('should check error min invalid name lenght', () => {
    expect(() => {
        const character = new Character('A', 'Swordsman', 100, 1)
    }).toThrowError('Некорректная длина имени. Допустимое количество символов: от 2 до 10.')
})

test('should check error max invalid name lenght', () => {
    expect(() => {
        const character = new Character('LongLongLongName', 'Swordsman', 100, 1)
    }).toThrowError('Некорректная длина имени. Допустимое количество символов: от 2 до 10.')
})

test('should check error correct class', () => {
    expect(() =>{
        const character = new Character('John', 'welder', 100, 1)
    }).toThrowError('Некорректный тип персонажа.')
})

test('check levelup method', () => {
    const character = new Character('John', 'Daemon', 100, 1)
    character.levelup()
    expect(character.level).toBe(2);
    expect(character.attack).toBe(12);
    expect(character.defence).toBe(48);
})


test('check damage method', () => {
    const character = new Character('John', 'Daemon', 100, 1)
    character.damage(20) 
    expect(character.health).toBeCloseTo(88);
})


test('if the health is less than 1 then the error', () => {
    expect(() => {
    const character = new Character('John', 'Daemon', -1, 1)
    character.levelup()
    }).not.toThrowError('Нельзя повысть левел умерьшего')
})

describe('Characterm', () => {
    test('should create valid class', () => {
        const character = new Character('John', 'Bowman', 100, 1);

        expect(character.name).toBe('John');
        expect(character.type).toBe('Bowman');
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
        expect(character.attack).toBe(25);
        expect(character.defence).toBe(25);
    })
})

describe('Characterm', () => {
    test('should create valid class', () => {
        const character = new Character('John', 'Magician', 100, 1);

        expect(character.name).toBe('John');
        expect(character.type).toBe('Magician');
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
        expect(character.attack).toBe(10);
        expect(character.defence).toBe(40);
    })
})

describe('Characterm', () => {
    test('should create valid class', () => {
        const character = new Character('John', 'Undead', 100, 1);

        expect(character.name).toBe('John');
        expect(character.type).toBe('Undead');
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
        expect(character.attack).toBe(25);
        expect(character.defence).toBe(25);
    })
})

describe('Characterm', () => {
    test('should create valid class', () => {
        const character = new Character('John', 'Zombie', 100, 1);

        expect(character.name).toBe('John');
        expect(character.type).toBe('Zombie');
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
        expect(character.attack).toBe(40);
        expect(character.defence).toBe(10);
    })
})

describe('Characterm', () => {
    test('should create valid class', () => {
        const character = new Character('John', 'Daemon', 100, 1);

        expect(character.name).toBe('John');
        expect(character.type).toBe('Daemon');
        expect(character.health).toBe(100);
        expect(character.level).toBe(1);
        expect(character.attack).toBe(10);
        expect(character.defence).toBe(40);
    })
})



describe('Bowman', () => {
    it('should create correct class', () => {
    const name = 'John';
    const type = 'Bowman';
    const health = 100;
    const level = 1;


    const bowman = new Bowman(name, type, health, level);

    expect(bowman).toBeInstanceOf(Bowman);
    expect(bowman.name).toBe(name);
    expect(bowman.type).toBe(type);
    expect(bowman.health).toBe(health);
    expect(bowman.level).toBe(level);

})
})


describe('Swordsmans', () => {
    it('should create correct class', () => {
    const name = 'John';
    const type = 'Swordsman';
    const health = 100;
    const level = 1;


    const swordsman = new Swordsman(name, type, health, level);

    expect(swordsman).toBeInstanceOf(Swordsman);
    expect(swordsman.name).toBe(name);
    expect(swordsman.type).toBe(type);
    expect(swordsman.health).toBe(health);
    expect(swordsman.level).toBe(level);

})
})


describe('Magician', () => {
    it('should create correct class', () => {
    const name = 'John';
    const type = 'Magician';
    const health = 100;
    const level = 1;


    const magician = new Magician(name, type, health, level);

    expect(magician).toBeInstanceOf(Magician);
    expect(magician.name).toBe(name);
    expect(magician.type).toBe(type);
    expect(magician.health).toBe(health);
    expect(magician.level).toBe(level);

})
})


describe('Daemon', () => {
    it('should create correct class', () => {
    const name = 'John';
    const type = 'Daemon';
    const health = 100;
    const level = 1;


    const daemon = new Daemon(name, type, health, level);

    expect(daemon).toBeInstanceOf(Daemon);
    expect(daemon.name).toBe(name);
    expect(daemon.type).toBe(type);
    expect(daemon.health).toBe(health);
    expect(daemon.level).toBe(level);

})
})


describe('Undead', () => {
    it('should create correct class', () => {
    const name = 'John';
    const type = 'Undead';
    const health = 100;
    const level = 1;


    const undead = new Undead(name, type, health, level);

    expect(undead).toBeInstanceOf(Undead);
    expect(undead.name).toBe(name);
    expect(undead.type).toBe(type);
    expect(undead.health).toBe(health);
    expect(undead.level).toBe(level);

})
})



describe('Zombie', () => {
    it('should create correct class', () => {
    const name = 'John';
    const type = 'Zombie';
    const health = 100;
    const level = 1;


    const zombie = new Zombie(name, type, health, level);

    expect(zombie).toBeInstanceOf(Zombie);
    expect(zombie.name).toBe(name);
    expect(zombie.type).toBe(type);
    expect(zombie.health).toBe(health);
    expect(zombie.level).toBe(level);

})
})