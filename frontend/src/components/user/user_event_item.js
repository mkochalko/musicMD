import React from 'react';
import classes from './user.module.css';

class UserEventItem extends React.Component {

    render() {
        return(
            <li className={classes.userEventItem}>
                {this.props.event.artist}
                {this.props.event.venue}
                {this.props.event.address}
                {this.props.event.date}
            </li>
        )
    }
}

export default UserEventItem;