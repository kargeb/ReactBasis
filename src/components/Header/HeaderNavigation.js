import React from 'react';
import styles from './HeaderNavigation.module.scss';
import { NavLink } from 'react-router-dom';

const HeaderNavigation = () => (
    <nav>
        <ul className={styles.wrapper} >
            <li className={styles.navItem}><NavLink exact activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to="/">twitter</NavLink></li>
            <li className={styles.navItem}><NavLink activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to="/notes">notes</NavLink></li>
            <li className={styles.navItem}><NavLink activeClassName={styles.navItemLinkActive} className={styles.navItemLink} to="/articles">articles</NavLink></li>
        </ul>
    </nav>

)

export default HeaderNavigation;