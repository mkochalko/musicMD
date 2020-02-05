
import React from 'react';
import classes from './marker.module.css';

const Marker = (props: any) => {
    const { color, name } = props;
    return (
        <div className={classes.marker}
            style={{ backgroundColor: color, cursor: 'pointer' }}
            title={name}
        />
    );
};

export default Marker;