/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import PropTypes from 'prop-types';

const Congrats = ({ success }) => {
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

Congrats.propTypes = {
      success: PropTypes.bool.isRequired
}

export default Congrats;