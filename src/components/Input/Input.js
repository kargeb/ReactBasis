import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({tag : Tag ,name, maxLength, label, required, ...props}) => (

    <div className={styles.formItem}>
        <Tag
            className = { Tag === 'input' ? styles.input : styles.textarea }
            type="text"
            name = {name}
            maxLength = {maxLength}
            id = {name}
            placeholder = " "
            required = {required}
            {...props}
        />
        <label className={styles.label} htmlFor={name} >
            {label}
        </label>
        <div className={styles.formItemBar}/>
    </div>
);

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    required: PropTypes.bool

}

Input.defaultProps = {
    tag: "input",
    maxLength: 200,
    required: true
}

export default Input;