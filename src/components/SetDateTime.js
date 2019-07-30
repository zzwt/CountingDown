import React, { Component } from 'react';
import moment from 'moment';

export default class SetDateTime extends Component {

  constructor(props){
    super(props)
    this.startCountingClicked = this.startCountingClicked.bind(this);
  } 
  componentDidMount() {
    this.pickedDate = new Picker(document.querySelector('.js-date-picker'), {
      format: 'MMM D, YYYY',
      text: {
        title: 'Pick a date',
      },
    });

    this.pickedTime = new Picker(document.querySelector('.js-time-picker'), {
      format: 'HH:mm:ss',
      headers: true,
      text: {
        title: 'Pick a time',
      },
    });
  }

  componentWillUnmount(){
    this.pickedDate.destroy();
    this.pickedTime.destroy();
  }

  startCountingClicked(event) {
    const dateString = moment(this.pickedDate.date).format("MMM D, YYYY");
    const timeString = moment(this.pickedTime.date).format("HH:mm:ss");
    const endDateTime = moment(dateString + ' '+ timeString, 'MMM D, YYYY HH:mm:ss');

    this.props.startCountingCallback(endDateTime);
  }

  render() {
    return (
      <div data-test='component-setDateTime'>
        <div className="day_span">
          <span className="input_text"> on</span>
          <input type="text" className="form-control js-date-picker input_day" data-test="js-date-picker" value={moment().format("MMM D, YYYY")} onChange={()=>{}} />
        </div>
        <div className="time_span">
          <span className="input_text"> at </span>
          <input type="text" className="form-control js-time-picker input_time"  data-test="js-time-picker" value={moment().add(1, 'h').format("HH:mm:ss")}onChange={()=>{}} />
        </div>
        <div>
          <button className="countdown_button" data-test="countdown_button" onClick={this.startCountingClicked}> 
            Start Countdown
          </button>
        </div>
      </div>
    )
  }
}
