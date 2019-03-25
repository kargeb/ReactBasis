import React from 'react';
import styles from './Radio.module.scss';

const Radio = ({handleRadio}) => {

    // const fun = (e) =>{
    //     // console.log(e.target.id);
    //     console.dir(e.target);
    // }

    return (
    <div className={styles.wrapper} >
        <div className={styles.item} >
            <input type="radio" id="twitter"  defaultChecked  onClick={handleRadio} name="modalRadio"/>
            <label onClick={handleRadio} htmlFor="twitter">twitter</label>
        </div>
        <div className={styles.item}>
            <input type="radio" id="article" onClick={handleRadio} name="modalRadio"/>
            <label onClick={handleRadio} htmlFor="article">article</label>
        </div>
        <div className={styles.item}>
            <input type="radio" id="note" onClick={handleRadio} name="modalRadio"/>
            <label onClick={handleRadio} htmlFor="note">note</label>
        </div>
    </div>
    )
}

export default Radio;