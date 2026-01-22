import React from 'react';
import classes from './Scoop.module.css';

const Scoop = ({ scoop }) => {
    // Convert scoop name to lowercase to match CSS class names
    const scoopClass = scoop ? scoop.toLowerCase() : '';
    return <div className={[classes.scoop, classes[scoopClass]].join(' ')} />;
};

export default Scoop;
