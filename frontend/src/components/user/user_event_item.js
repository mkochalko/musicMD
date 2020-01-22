import React from 'react';

class UserEventItem extends React.Component {

    render() {
        return(
            <div>
                {this.props.event}
            </div>
        )
    }
}

export default UserEventItem;