import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}

Message.propTypes = {
    text: PropTypes.string.isRequired
}
Message.defaultProps = {
    text: "Default Hello Word"
}

export default Message;