import React from 'react';
import classes from './user.module.css';

class UserEventItem extends React.Component {

    render() {
        return(
            <div id={this.props.id} className={classes.eventDiv}>
                <p className={classes.eventItemArtist}>{this.props.event.artist}</p>
                <p className={classes.eventItemVenue}>{this.props.event.venue}</p>
                <p className={classes.eventItemAddress}>{this.props.event.address}</p>
                <p className={classes.eventItemDate}>{this.props.event.date}</p>
            </div>
            
        )
    }
}

export default UserEventItem;