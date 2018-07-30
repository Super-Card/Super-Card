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
    this.saveUser = this.saveUser.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const user = this.state.user;

    user[name] = value;

    this.setState({ user });
  }
  saveUser(event) {
    event.preventDefault();
    alert('Your sumbition is sucessful!');
  }
  render() {
    return (
      <form>
        <input type="text" name="name" onChange={this.handleInputChange} value={this.state.user.name} />
        <input type="email" name="email" onChange={this.handleInputChange} value={this.state.user.email} />
        <textarea name="text" onChange={this.handleInputChange} cols="30" rows="5" value={this.state.user.text} />
        <input type="submit" value="Submit" onClick={this.saveUser} />
      </form>
    );
  }
}

export default RequestForm;
