import './App.css';
import React from 'react';
import Message from './components/Message'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      author: "",
      message: ""
    }
  }
  render = () => {
    return (
      <div className='app-container'>
        <header className='header-text'>Welcome to my Chatroom</header>
        <p>Have fun chatting!</p>
        <hr/>
        <div className='message-box'>
          <input
            value={this.state.author}
            onChange={this.handleAuthorChange}
            className='text-input'
            type='text'
            placeholder='your name...'
          />
          <input
            value={this.state.message}
            onChange={this.handleMessageChange}
            className='text-input'
            type='text'
            placeholder='your message...'
          />
          <button className='send-button' onClick={this.createMessage}>
            Send Message
          </button>
          {this.renderMessages()}
        </div>
      </div>
    );
  }

  handleAuthorChange = (e) => {
    this.setState({author: e.target.value})
  }

  handleMessageChange = (e) => {
    this.setState({message: e.target.value})
  }

  createMessage = () => {
    let newMessage = {
      author: this.state.author,
      message: this.state.message,
      timestamp: new Date().getTime()
    };
    let newMessages = this.state.messages;
    newMessages.push(newMessage);
    this.setState({messages: newMessages});
  }

  renderMessages = () => {
    if (this.state.messages.length == 0) {
      return (<div className='message-container'>Nothing here yet!</div>)
    }

    let messages = [];
    this.state.messages.forEach((element, i) => {
      messages.push(
        <Message
          key={i}
          author={element.author}
          message={element.message}
          timestamp={element.timestamp}
        />
      )
    });

    return (
      <div>
        {messages}
      </div>
    )
  }
}

export default App;
