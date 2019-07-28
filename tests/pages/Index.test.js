import React from 'react';
import {shallow} from 'enzyme';
import Index from '../../src/pages/Index';  
import {findTestAttr} from '../utils'

import expect from 'expect';


describe('Render', () => {
  let wrapper;
    beforeEach(() =>{
      wrapper = shallow(<Index />);
    }) 
  it('Index page should render without error', () => {
    const component = findTestAttr(wrapper, "page-input");
    expect(component.length).toBe(1);
    
  })

  it('Index page should have a background image', () => {
    const component = findTestAttr(wrapper, "bg-image");
    expect(component.length).toBe(1);
    
  })
  
  it('Index page should render datetime left', () => {
    const component = findTestAttr(wrapper, "component-daytime");
    expect(component.length).toBe(1);
    
  })
})


