import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import DayTime from '../../src/components/DayTime';  
import moment from 'moment';
import {findTestAttr} from '../utils'
// import configEnzyme from '../utils/setupTests'

// configEnzyme(); 
describe('DayTime Render', () => {
  let endDateTime;
  beforeEach(() =>{
    endDateTime = moment().add(10,'d')
  }) 

  it('DayTime component should render without error', () => {
    const wrapper = shallow(<DayTime endDateTime={endDateTime} />);
    const component = findTestAttr(wrapper, "component-daytime");
    expect(component.length).toBe(1); 
  })

  it('DayTime component should render day if time left is more than 1 day', () => {
    const wrapper = shallow(<DayTime endDateTime={endDateTime} />);
    const component = findTestAttr(wrapper, "daysLeft");
    expect(component.length).toBe(1);
  })

  it('DayTime component should NOT render day if time left is less than 24 hours', () => {
    endDateTime = moment().add(10,'h');
    const wrapper = shallow(<DayTime endDateTime={endDateTime} />);
    const component = findTestAttr(wrapper, "daysLeft");
    expect(component.length).toBe(0);
  })

  it('DayTime component should allways render time', () => {
    const wrapper = shallow(<DayTime endDateTime={endDateTime} />);
    const component = findTestAttr(wrapper, "timeLeft");
    expect(component.length).toBe(1);
  })

  it('DayTime component should display 00 : 00 : 00 if times up', () => {
    endDateTime = moment().subtract(2,'s');
    const wrapper = shallow(<DayTime endDateTime={endDateTime} />);
    
    const component = findTestAttr(wrapper, "timeLeft");
    expect(component.text()).toBe("00 : 00 : 00")
    
  })
})



describe('Couting down correctly', () => {
  let endDateTime;
  beforeEach(() =>{
    endDateTime = moment().add(10,'d')
  }) 
  it('timer set on component mount', () => {
    const wrapper = shallow(<DayTime endDateTime={endDateTime} />);
    wrapper.instance().componentDidMount();
    expect(wrapper.instance().timer).not.toBeUndefined();
    wrapper.instance().componentWillUnmount();
  })

  it('timer unset on component unmount', () => {
    endDateTime =  moment().add(0, 's')
    const wrapper = shallow(<DayTime endDateTime={endDateTime} />);
    wrapper.instance().componentDidMount();
    wrapper.instance().updateTimeLeft();
    
    expect(wrapper.instance().timer).toBeUndefined();
    wrapper.instance().componentWillUnmount();
  })

  it('timer unset if no time left', () => {
    const wrapper = shallow(<DayTime endDateTime={endDateTime} />);
    wrapper.instance().componentDidMount();
    wrapper.instance().componentWillUnmount();
    expect(wrapper.instance().timer).toBeUndefined();
  })
})

