/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import PropTypes from 'prop-types';

const Congrats = ({ success }) => {
    return success
        ?
        <div data-test="component-congrats" className="my-4">
            <span data-test="congrats-message" className="alert alert-success">
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