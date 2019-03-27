import React from 'react';
// import './ListWrapper.css';
import ListItem from './ListItem.js';
import styles from './List.module.scss';

const List = ({items}) => (

    <>
        { items.length ? (
                <ul className={styles.wrapper}>
                    {
                        items.map( (item) => (
                            <ListItem key={item.title} {...item}/> 
                        ))
                    }
                </ul>
            ) : (
                <h1 className={styles.noItems}>No itmes here :( please add some by click "new item" 🍔🐄🐄 </h1>
            )
        }
    </>
)

export default List;