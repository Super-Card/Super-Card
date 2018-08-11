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

  componentDidMount() {
    setTimeout(() => this.setState({ modalOpened: true }), 5000);
  }

  modalToggle() {
    this.setState({ modalOpened: !this.state.modalOpened });
  }

  render() {
    const coverClass = this.state.modalOpened ? 'modal-cover modal-cover-active' : 'modal-cover';
    const containerClass = this.state.modalOpened ? 'modal-container modal-container-active' : 'modal-container';

    return (
      <div>
        <div className={containerClass}>
          <div className="modal-header" />
          <h1> Want more offers? Sign Up! </h1>
          <div className="modal-body">
            <form action="#" className="form">
              <input type="email" className="input" />
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
