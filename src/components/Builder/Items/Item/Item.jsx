import { countBy } from 'lodash';
import React from 'react';
import classes from './Item.module.css';

const Item = ({ name, add, remove, scoops = [] }) => {
    const scoopsByCount = countBy(scoops);
    const count = scoopsByCount[name] || 0;
    const canRemove = count > 0;
    
    return (
        <li className={classes.item}>
            <span>{name}</span>
            {count > 0 ? (
                <span className={classes.quantity}>{count}</span>
            ) : null}
            <div className="right">
                <button
                    onClick={() => add(name)}
                    type="button"
                    className={[classes.plus, 'rounded'].join(' ')}
                >
                    +
                </button>
                <button
                    type="button"
                    onClick={() => canRemove && remove(name)}
                    disabled={!canRemove}
                    className={[classes.minus, 'rounded'].join(' ')}
                >
                    -
                </button>
            </div>
        </li>
    );
};

export default Item;
