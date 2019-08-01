import React from 'react';
import {shallow} from 'enzyme';
import {Index as IndexPage} from '../../src/pages/index';  
import {findTestAttr} from '../utils'

import expect from 'expect';


describe('Render', () => {
  let wrapper;
    beforeEach(() =>{
      wrapper = shallow(<IndexPage />);
    }) 
  it('Index page should render without error', () => {
    const component = findTestAttr(wrapper, "page-input");
    expect(component.length).toBe(1);
    
  })

  it('Index page should have a background image', () => {
    const component = findTestAttr(wrapper, "bg-image");
    expect(component.length).toBe(1);
    
  })
  
  it('Index page initial render should have a setupDateTime component', () => {
    const component  = wrapper.find('SetDateTime');
    expect(component.length).toBe(1);
    
  })

  it('Index page should have a DayTime component if it starts counting', () => {
    wrapper.setState({counting: true});
    const component  = wrapper.find('DayTime');
    expect(component.length).toBe(1);
    
  })
})


