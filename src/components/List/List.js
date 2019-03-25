import React from 'react';
// import './ListWrapper.css';
import ListItem from './ListItem.js';
import styles from './List.module.scss';

const List = ({items}) => (
    <ul className={styles.wrapper}>
        {
            items.map( (item) => (
                <ListItem key={item.name} {...item}/> 
             ))
        }
    </ul>
)

export default List;