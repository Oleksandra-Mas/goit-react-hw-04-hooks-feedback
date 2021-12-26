import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.scss';

class FeedbackOptions extends Component {
    static propTypes = {
        options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        onLeaveFeedback: PropTypes.func.isRequired,
    };

    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <ul className={styles.feedback_list}>
                {options.map(mood => (
                    <li className={styles.item} key={mood}>
                        <button
                            className={styles.button}
                            onClick={() => onLeaveFeedback(mood)}
                        >
                            {mood}{' '}
                        </button>
                    </li>
                ))}
            </ul>
        );
    }
}
export default FeedbackOptions;
