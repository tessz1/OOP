import { Character } from '../class/Character';

describe('Character', () => {
    test('should create valid name', () => {
        const character = new Character('John', 'Swordsman');
        expect(character.name).toBe('John');
        expect(character.type).toBe('Swordsman');
        expect(character.health).toBe(100);
        expect(character.attack).toBeUndefined();
        expect(character.defence).toBeUndefined();
        expect(character.level).toBe(1);
        
    });

    test('should check error min invalid name length', () => {
        expect(() => {
            const character = new Character('A', 'Swordsman', 100, 1);
        }).toThrowError('Некорректная длина имени. Допустимое количество символов: от 2 до 10.');
    });

    test('should check error max invalid name length', () => {
        expect(() => {
            const character = new Character('LongLongLongName', 'Swordsman', 100, 1);
        }).toThrowError('Некорректная длина имени. Допустимое количество символов: от 2 до 10.');
    });
    
    test('should check error correct class', () => {
        expect(() => {
            const character = new Character('John', 'welder', 100, 1);
        }).toThrowError('Некорректный тип персонажа.');
    });

    test('check levelup method', () => {
        const character = new Character('John', 'Daemon', 100, 1);
        character.levelup();
        expect(character.level).toBe(2);
        expect(character.attack).toBeUndefined();
        expect(character.defence).toBeUndefined();
    });

    test('check damage method', () => {
        const character = new Character('John', 'Daemon', 100, 1);
        character.damage(20);
        expect(character.health).toBeCloseTo(80);
    });

    test('if the health is less than 1 then the error', () => {
        const character = new Character('John', 'Daemon', 100, 1);
        character.health = 0;
        expect(() => {
            character.levelup();                                                                                                        
        }).toThrowError('Нельзя повысить уровень умершего.');
    });
});
