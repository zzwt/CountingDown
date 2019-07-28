import React from 'react';
import css from "./index.css"
import moment from 'moment';
import DayTime from '../components/DayTime'
import classnames from 'classnames';

export default class Index extends React.Component {

  constructor(props){
    super(props);
    // this.updateTimeLeft = this.updateTimeLeft.bind(this)
    // this.state = {
    //   timeLeft: moment.duration(moment().diff(moment(this.props.endDateTime)) / -1)
    // }
  }
  static getInitialProps(){
    return {
      bg: 'test1.jpg',
      endDateTime: moment().add(10,'s')
    }
  }

  componentDidMount() {
    new Picker(document.querySelector('.js-date-picker'), {
      format: 'MMM D, YYYY',
      text: {
        title: 'Pick a date',
      },
    });

    new Picker(document.querySelector('.js-time-picker'), {
      format: 'HH:mm',
      headers: true,
      text: {
        title: 'Pick a time',
      },
    });


  }

  render(){
    return (
      <div className='page-input' data-test='page-input'>
        <div className='bg-image'data-test='bg-image' style={
          { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), 
                              url('/static/${this.props.bg}')`
          }}
        >
          {/* <DayTime className='component-daytime' data-test='component-daytime' endDateTime={this.props.endDateTime}/> */}
          <div>
            <span className="input_text"> On</span>
            <input type="text" className="form-control js-date-picker input_day" value="Oct 24, 2048" />
            <span className="input_text"> At </span>
            <input type="text" className="form-control js-time-picker input_time" value="02:56" />
          </div>
        </div>
        
      </div>
    )
  }
}