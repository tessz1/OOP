import { Character } from '../class/Character';
import Bowerman from '../class/Bowerman';


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
        const bowerman = new Bowerman('Bowman'); 
        bowerman.levelup();
        const result = { attack: 30, defence: 30, health: 100, level: 2, name: 'Bowman', type: 'Bowman' }; 
        expect(bowerman).toEqual(result);
      });
      
      test('check damage method', () => {
        const bowerman = new Bowerman('Bowman'); 
        bowerman.damage(10);
        const result = {
          attack: 25, defence: 25, health: 92.5, level: 1, name: 'Bowman', type: 'Bowman' 
        };
        expect(bowerman).toEqual(result);
      });
      
      test('if the health is less than 0 then the error', () => {
        const bowerman = new Bowerman('Bowman');
        bowerman.damage(150);
        const result = {
            attack: 25, defence: 25, health: 0, level: 1, name: 'Bowman', type: 'Bowman'
        };
        expect(() => {
          bowerman.levelup();
        }).toThrowError(new Error('Нельзя повысить уровень умершего.'));
      });
    })