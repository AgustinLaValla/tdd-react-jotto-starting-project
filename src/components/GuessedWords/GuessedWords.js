import React from 'react';
import PropsTypes from 'prop-types';

const GuessedWords = (props) => {
    let contents;
    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">Try to guest the secret word</span>
        );
    }
    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    )
};


GuessedWords.propsTypes = {
    guessedWords: PropsTypes.arrayOf(
        PropsTypes.shape({
            guessedWord: PropsTypes.string.isRequired,
            letterMatchCount: PropsTypes.number.isRequired,
        })
    ).isRequired
};

export default GuessedWords;
