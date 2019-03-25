import React from 'react';
import Button from '../Button/Button';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';
// import logoImage from '../../assets/images/logo.svg';

const Header = ({showModal}) => (
  <header className={styles.wrapper}>
    <div className={styles.logo}>FavNote.</div>
    <HeaderNavigation />
    <Button secondary={true} onClick={showModal} >new item</Button>
  </header>
);

export default Header;
