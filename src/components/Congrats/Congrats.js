/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

export default ({ success }) => {
    return success
        ?
        <div data-test="component-congrats">
            <span data-test="congrats-message">
                Congratulations! You guessed the word!
            </span>
        </div>
        :
        <div data-test="component-congrats" />
}