import React from 'react';
import styles from './ListWrapper.module.scss';
import List from '../List/List'

const ListWrapper = ({filterElements}) => (
<div className={styles.wrapper}>
    <div>
        {filterElements.map(item => (
        <List key={item.name} {...item} />
        ))}
    </div>

</div>
);

export default ListWrapper