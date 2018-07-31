import React from 'react';
import './newsletter.css';

class Newsletter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpened: false
    };

    this.modalToggle = this.modalToggle.bind(this);
  }

  modalToggle() {
    this.setState({ modalOpened: !this.state.modalOpened });
  }

  render() {
    const coverClass = this.state.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover';
    const containerClass = this.state.modalOpened ? 'modal-container modal-container-active' : 'modal-container';

    return (
      <div>
        <button className="btn btn-primary" onClick={this.modalToggle}>
          Sign up for our Newsletter!
        </button>

        <div className={containerClass}>
          <div className="modal-header" />
          <h1> Want more offers? Sign! </h1>
          <div className="modal-body">
            <form action="#">
              <input type="email" />
              <input className="newsletter-submit" type="submit" value="Submit" />
            </form>
          </div>
          <div className="modal-footer" />
        </div>

        <div className={coverClass} onClick={this.modalToggle} />
      </div>
    );
  }
}

export default Newsletter;
