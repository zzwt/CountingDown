import React from 'react';
import css from "./index.css"
import moment from 'moment';
export default class Index extends React.Component {

  constructor(props){
    super(props);
    this.updateTimeLeft = this.updateTimeLeft.bind(this)
    this.state = {
      timeLeft: moment.duration(moment().diff(moment(this.props.endDateTime)) / -1)
    }
  }
  static getInitialProps(){
    return {
      bg: 'test1.jpg',
      endDateTime: moment().add(10,'d')
    }
  }

  updateTimeLeft(){
    const duration = moment.duration(moment().diff(moment(this.props.endDateTime)) / -1);
    this.setState ({
      timeLeft: duration 
    });
    if(duration.asSeconds() <= 0)
      return clearInterval(this.timer); 
  }
  componentDidMount(){
    this.timer = setInterval(() => this.updateTimeLeft(), 1000) 
  }
  componentWillUnmount(){
    if(this.timer)
      clearInterval(this.timer); 
  }

  pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  displayTime(timeLeft) {
    return `${this.pad(timeLeft.hours(), 2)} : ${this.pad(timeLeft.minutes(), 2)} : ${this.pad(timeLeft.seconds(), 2)}`
  }

  displayDayTimeLeft(){
    const timeLeft = this.state.timeLeft
    const days = timeLeft.asDays();
    return (
      <div className="timeDisplay">
        {days >= 1 ? 
          ( <><div>{Math.floor(days)} Days</div><div>{this.displayTime(timeLeft)}</div></> ) : 
          ( days > 0 ? <div>{this.displayTime(timeLeft)}</div> : '00 : 00 : 00' )
         }
      </div>
    )
  }
  render(){
    return (
    <div className='bg-image' style={
      { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), 
                          url('/static/${this.props.bg}')`
      }}
      >{this.displayDayTimeLeft()}
      </div>
    )
  }
}