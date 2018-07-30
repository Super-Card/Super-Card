import React from 'react';

class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        text: ''
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputEmailChange = this.handleInputEmailChange.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  handleInputChange({ name, value }) {
    this.setState({ user: { name, value, ...this.state.user } });
  }
  handleInputEmailChange({ email, value }) {
    this.setState({ user: { email, value, ...this.state.user } });
  }
  handleInputTextChange({ text, value }) {
    this.setState({ user: { text, value, ...this.state.user } });
  }
  saveUser(event) {
    event.preventDefault();
     alert('Your sumbition is sucessful!');
  }
  render() {
    return (
      <form>
        <input
          type="text"
          name="name"
          onChange={this.handleInputChange}
          // value={this.state.user.name}
          placeholder="Your name"
        />
        <input
          type="email"
          name="email"
          onChange={this.handleInputEmailChange}
          // value={this.state.user.email}
          placeholder="Your email"
        />
        <textarea
          name="text"
          onChange={this.handleInputTextChange}
          cols="30"
          rows="5"
          // value={this.state.user.text}
          placeholder="Write message.."
        />
        <input type="submit" value="Submit" onClick={this.saveUser} />
      </form>
    );
  }
}

export default RequestForm;
