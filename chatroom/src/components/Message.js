import React from 'react';
import './Message.css';

class Message extends React.Component {
    render() {
        let image = "https://ui-avatars.com/api/?name="+this.props.author+"&background=random";
        return(
            <div className='message'>
                <div className='message-item'>
                    <img className='message-img' src={image} alt='profile pic'></img>
                </div>
                <div className='message-item'>
                    <p><b>{this.props.author}</b> <span>{this.props.timestamp}</span></p>
                    <p>{this.props.message}</p>
                </div>
            </div>
        )
    }
}

export default Message;