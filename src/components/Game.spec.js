import React from 'react';
import { indexOfCharacterInArray, testIfUpperCaseAndLetter, stateAfterFail } from './Game';

import Game from './Game';
import { shallow } from 'enzyme';

describe('teste indexOfCharacterInArray', () => {
    /* it("should be able to access functions", () => {
       const wrapper = shallow(<Game tex="text"/>);
       let res = g.render();
        expect(res).toBe(-1);
    }); */

    test("indexOfCharacterInArray r in empty array", () => {
        let character = 'r';
        let array = [];
        expect(indexOfCharacterInArray(character, array)).toBe(-1);
    });

    test("indexOfCharacterInArray r in [r, f ] array", () => {
        let character = 'r';
        let array = ['r', 'f'];
        expect(indexOfCharacterInArray(character, array)).toBe(0);
    });

    test("indexOfCharacterInArray r in [f, r ] array", () => {
        let character = 'r';
        let array = ['f', 'r'];
        expect(indexOfCharacterInArray(character, array)).toBe(1);
    });

    test("indexOfCharacterInArray # in ['', '' ]", () => {
        let character = '#';
        let array = ['', ''];
        expect(indexOfCharacterInArray(character, array)).toBe(-1);
    });

    test("indexOfCharacterInArray r in ['r', 'f', 'r']", () => {
        let character = 'r';
        let array = ['r', 'f', 'r'];
        expect(indexOfCharacterInArray(character, array)).toBe(2);
    });

    test("indexOfCharacterInArray 'r' ['f', 'f' , 'f', r']", () => {
        let character = 'r';
        let array = ['f', 'f', 'f', 'r'];
        expect(indexOfCharacterInArray(character, array)).toBe(3);
    });

    test("indexOfCharacterInArray r in [['f'],['r'],['f']]", () => {
        let character = 'r';
        let array = [['f'], ['r'], ['f']];
        expect(indexOfCharacterInArray(character, array)).toBe(-1);
    });
});
describe('teste testIfUpperCaseAndLetter', () => {
    it("should handle uppercases", () => {
        let char = 's';
        expect(testIfUpperCaseAndLetter(char)).toBe(false);
    }
    );

    test("testIfUpperCaseAndLetter('F')", () => {
        let char = 'F';
        expect(testIfUpperCaseAndLetter(char)).toBe(true);
    }
    );

    test("testIfUpperCaseAndLetter('Ö')", () => {
        let char = 'Ö';
        expect(testIfUpperCaseAndLetter(char)).toBe(false);
    }
    );

    test("testIfUpperCaseAndLetter('§')", () => {
        let char = '§';
        expect(testIfUpperCaseAndLetter(char)).toBe(false);
    }
    );


    test("testIfUpperCaseAndLetter(' ')", () => {
        let char = ' ';
        expect(testIfUpperCaseAndLetter(char)).toBe(false);
    }
    );


    test("testIfUpperCaseAndLetter('')", () => {
        let char = '';
        expect(testIfUpperCaseAndLetter(char)).toBe(false);
    }
    );

    test("testIfUpperCaseAndLetter('AA')", () => {
        let char = 'AA';
        expect(testIfUpperCaseAndLetter(char)).toBe(false);
    }
    );
});
describe('test stateAfterFail', () => {
    test('stateAfterFail( 6, 7)', () => {
        let current = 6;
        let max = 7;

        let result = { noOfFails: current + 1, loose: true };
        expect(stateAfterFail(current, max)).toEqual(result);
    });

    test('stateAfterFail( 5, 7)', () => {
        let current = 5;
        let max = 7;

        let result = { noOfFails: current + 1};
        expect(stateAfterFail(current, max)).toEqual(result);
    });

    test('stateAfterFail( 0, 7)', () => {
        let current = 0;
        let max = 7;

        let result = { noOfFails: current + 1};
        expect(stateAfterFail(current, max)).toEqual(result);
    });
});
