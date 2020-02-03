import React from 'react';
import classes from './event_idx_item.module.css';

class EventsIndexItem extends React.Component {

    render() {
        const months = {
            '01': "Jan",
            '02': "Feb",
            '03': "Mar",
            '04': "Apr",
            '05': "May",
            '06': "Jun",
            '07': "Jul",
            '08': "Aug",
            '09': "Sep",
            '10': "Oct",
            '11': "Nov",
            '12': "Dec"
        };
        const month = this.props.event.dates.start.localDate.split('-')[1].toString();


        return (
            <li className={classes.eventIdxItem} id={this.props.event.id}>
                <div className={classes.eventName}>
                    {this.props.event.name}
                </div>
                <div className={classes.date}>
                    <div className={classes.month}>
                        {months[month]}
                    </div>
                    <div className={classes.day}>
                        {this.props.event.dates.start.localDate.split('-')[2]}
                    </div>
                </div>
            </li>

        )
    }
}

export default EventsIndexItem;
