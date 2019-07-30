import React, { Component } from 'react';
import moment from 'moment';


export default class DayTime extends Component {

  constructor(props){
    super(props);
    this.updateTimeLeft = this.updateTimeLeft.bind(this)
    this.resetClicked = this.resetClicked.bind(this)
    this.state = {
      timeLeft: moment.duration(moment().diff(moment(this.props.endDateTime)) / -1)
    }
  }

  updateTimeLeft(){
    const duration = moment.duration(moment().diff(moment(this.props.endDateTime)) / -1);
    this.setState ({
      timeLeft: duration 
    });
    // console.log("seconds left", duration.asSeconds())
    if(duration.asSeconds() <= 0){
      clearInterval(this.timer); 
      this.timer = undefined;
    }
  }

  componentDidMount(){
    this.timer = setInterval(() => this.updateTimeLeft(), 1000) 
  }
  componentWillUnmount(){
    if(this.timer){
      clearInterval(this.timer); 
      this.timer = undefined;
    }
  }

  pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  formatTime(timeLeft) {
    return `${this.pad(timeLeft.hours(), 2)} : ${this.pad(timeLeft.minutes(), 2)} : ${this.pad(timeLeft.seconds(), 2)}`
  }


  displayTime(timeLeft){
    const days = timeLeft.asDays();
    return (
      <div className="timeLeft" data-test="timeLeft"> 
        {days >= 0? this.formatTime(timeLeft) : "00 : 00 : 00"}
      </div>
    )
  }

  displayDay(timeLeft){
    const days = timeLeft.asDays();
    if(days >= 1)
      return (
              <div className="daysLeft" data-test="daysLeft"> 
                <div>{Math.floor(days)} Days</div>
              </div>
              )
  }

  displayResetButton(){
    return (
      <button className="reset_button" onClick={this.resetClicked}>Reset</button>
    )
  }

  resetClicked(event){
    event.preventDefault();
    this.props.resetCallback(); 
  }

  render() {
    return (
      <div data-test="component-daytime">
        {this.displayDay(this.state.timeLeft)}
        {this.displayTime(this.state.timeLeft)}
        {this.displayResetButton()}
      </div>
    )
  }
}
