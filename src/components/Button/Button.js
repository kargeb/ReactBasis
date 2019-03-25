import React from 'react';
import styles from './Button.module.scss';

const Button = ({children, href, secondary, ...props}) => (
    <>
        {
            href ? (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button}
                >{children}</a>
            ) : (
                <button className={ secondary ? styles.secondary : styles.button} {...props}>
                    {children}
                </button>
            )
        }
    </>
)

export default Button;