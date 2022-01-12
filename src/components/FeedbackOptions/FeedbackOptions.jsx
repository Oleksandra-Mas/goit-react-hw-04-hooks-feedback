import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
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

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
