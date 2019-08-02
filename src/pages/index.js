import React, {Component} from 'react';
import css from "./index.css"
import moment from 'moment';
import DayTime from '../components/DayTime'
import SetDateTime from '../components/SetDateTime'
import classnames from 'classnames';

export class Index extends Component {

  constructor(props){
    super(props);
    this.startCountingCallback = this.startCountingCallback.bind(this)
    this.resetCallback = this.resetCallback.bind(this)
    // this.state = {
    //   timeLeft: moment.duration(moment().diff(moment(this.props.endDateTime)) / -1)
    // }

    this.state = {
      bg: 'test1.jpg',
      endDateTime: moment().add(10,'s'),
      counting: false
    }
  }

  
  // static getInitialProps(){
  //   return {
  //     bg: 'test1.jpg',
  //     endDateTime: moment().add(10,'s'),
  //     counting: false
  //   }
  // }

  startCountingCallback(endDateTime){
    this.setState({...this.state, endDateTime, counting: true});
  }

  resetCallback(){
    this.setState({...this.state, counting: false});
  }

  render(){
    return (
      <div className='page-input' data-test='page-input'>
        <div className='bg-image'data-test='bg-image' style={
          { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), 
                              url('/static/${this.state.bg}')`
          }}
        >
          {
            this.state.counting ? 
            <DayTime className='component-daytime' 
                     data-test='component-daytime' 
                     endDateTime={this.state.endDateTime}
                     resetCallback={this.resetCallback}/> :
            <SetDateTime startCountingCallback={this.startCountingCallback}/>
          }
        </div>
      </div>
    )
  }
}

export default Index;