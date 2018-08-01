import React from 'react';

class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: '',
        email: '',
        text: ''
      },
      modalViewed: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputEmailChange = this.handleInputEmailChange.bind(this);
    this.modalToggle = this.modalToggle.bind(this);
  }

  modalToggle() {
    this.setState({ modalViewed: !this.state.modalViewed });
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
  render() {
    const coverClass = this.state.modalViewed ? 'cover-modal cover-modal-active' : 'cover-modal';
    const containerClass = this.state.modalViewed ? 'modal-wrapper modal-wrapper-active' : 'modal-container';

    return (
      <div>
        <form className="request-form" id="request-card">
          <h2 className="request-heading">Request your SuperCard today!</h2>
          <input
            type="text"
            name="name"
            onChange={this.handleInputChange}
            // value={this.state.user.name}
            placeholder="Your name"
            className="request-input"
          />
          <br />
          <input
            type="email"
            name="email"
            onChange={this.handleInputEmailChange}
            // value={this.state.user.email}
            placeholder="Your email"
            className="request-input"
          />
          <br />
          <textarea
            name="text"
            onChange={this.handleInputTextChange}
            cols="45"
            rows="5"
            // value={this.state.user.text}
            placeholder="Write message.."
            className="request-input"
          />
          <br />
          <input type="reset" value="Submit" className="btn-submit" onClick={this.modalToggle} />
        </form>
        <div className={containerClass}>
          <h1 className="modal_heading"> Your request is accepted! </h1>
          <p className="modal-description">We will get in touch with you in 24 hours to set-up delivery.</p>
        </div>

        <div className={coverClass} onClick={this.modalToggle} />
      </div>
    );
  }
}

export default RequestForm;
