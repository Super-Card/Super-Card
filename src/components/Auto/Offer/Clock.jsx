import React, { Component } from 'react';
import './offer.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor(time / 1000 * 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.setState({ days, hours, minutes, seconds });
  }

  leadingZero(num) {
    return num < 10 ? '0' + num : num;
  }

  render() {
    return (
      <div className='Clock-container'>
        <div className='Clock-days'>Days:{this.state.days}</div>
        <div className='Clock-hours'>Hours:{this.leadingZero(this.state.hours)}</div>
        <div className='Clock-minutes'>Minutes:{this.leadingZero(this.state.minutes)}</div>
        <div className='Clock-seconds'>Seconds:{this.leadingZero(this.state.seconds)}</div>
      </div>
    );
  }
}

export default Clock;
