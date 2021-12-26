import PropTypes from 'prop-types';

import styles from './Section.module.scss';

export default function Section({ title, children }) {
    return (
        <div className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </div>
    );
}
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};
