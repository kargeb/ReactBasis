import React from 'react';
import styles from './Modal.module.scss';
import Form from '../Form/Form';

const Modal = ({closeModal}) => (

    <div className={styles.wrapper}>
        <button onClick={closeModal} className={styles.closeButton}>X</button>
        <Form/>
    </div>
)

export default Modal;