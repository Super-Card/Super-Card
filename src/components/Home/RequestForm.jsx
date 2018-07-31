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
    this.refs.form.reset();
  }
  render() {
    return (
      <form className="request-form" ref="form">
        <h2 className="request-heading">Request your SuperCard today!</h2>
        <input
          type="text"
          name="name"
          onChange={this.handleInputChange}
          // value={this.state.user.name}
          placeholder="Your name"
        />
        <br />
        <input
          type="email"
          name="email"
          onChange={this.handleInputEmailChange}
          // value={this.state.user.email}
          placeholder="Your email"
        />
        <br />
        <textarea
          name="text"
          onChange={this.handleInputTextChange}
          cols="45"
          rows="5"
          // value={this.state.user.text}
          placeholder="Write message.."
        />
        <br />
        <input className="btn-submit" type="submit" value="Submit" onClick={this.saveUser} />
      </form>
    );
  }
}

export default RequestForm;
