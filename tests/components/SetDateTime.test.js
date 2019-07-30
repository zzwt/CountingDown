import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import SetDateTime from '../../src/components/SetDateTime';  
import moment from 'moment';
import {findTestAttr} from '../utils';
import sinon from 'sinon';

// configEnzyme(); 
describe('SetDateTime Render', () => {
  let wrapper;
  let startCountingFake;
  beforeEach(() =>{
    wrapper = shallow(<SetDateTime/>);
  }) 

  it('SetDateTime component should render without error', () => {
    const component = findTestAttr(wrapper, "component-setDateTime");
    expect(component.length).toBe(1); 
  })

  it('SetDateTime component should have an input of js-date-picker', () => {
    const component = findTestAttr(wrapper, "js-date-picker");
    expect(component.length).toBe(1);
  })

  it('SetDateTime component should have an input of js-time-picker', () => {
    const component = findTestAttr(wrapper, "js-time-picker");
    expect(component.length).toBe(1);
  })

  it('SetDateTime component display default date of today', () => {
    const component = findTestAttr(wrapper, "js-date-picker");
    expect(component.props().value).toBe(moment().format("MMM D, YYYY"));
  })


  it('SetDateTime component should have a start countdown button', () => {
    const component = findTestAttr(wrapper, "countdown_button");
    expect(component.length).toBe(1);
  })

  it('click on start countdown button should trigger startCountingClicked', () => {
    const fakeStub = sinon.stub(wrapper.instance(), "startCountingClicked");
    wrapper.instance().forceUpdate();
    const component = findTestAttr(wrapper, "countdown_button");
    component.simulate('click');
    expect(fakeStub.callCount).toBe(1);
  })
})


