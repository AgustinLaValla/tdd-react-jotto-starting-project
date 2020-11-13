import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAtrr } from '../../../test/test.utils';
import GuessedWords from './GuessedWords';


const defaultProps = {
    guessedWords: [{ guessedWords: 'train', letterMatchCount: 3 }]
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWords Component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper} 
 */

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />);
}


test("does not throw warning with expected props", () => {
    checkProps(GuessedWords, defaultProps);
});

describe("if there are no words gussed", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });

    test("renders without errors", () => {
        const component = findByTestAtrr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test("renders instructions to guessed a word", () => {
        const instructions = findByTestAtrr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });

});

describe("if there are words guessed", () => {

});