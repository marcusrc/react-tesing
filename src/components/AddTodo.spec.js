import React from 'react';  
import { shallow } from 'enzyme';
import { expect } from 'chai';
// import { default as ConnectedAddTodo, AddTodo } from './AddTodo';
import AddTodo from './AddTodo';

// explain redux store error 
describe('AddTodo', () => {
  it('2. should render correct', () => {
    const wrapper = shallow(<AddTodo onAdd={jest.fn()}/>);
    
    expect(wrapper).to.have.exactly(1).descendants('form');
    expect(wrapper).to.have.exactly(1).descendants('input');
    expect(wrapper).to.have.exactly(1).descendants('button');

  })
})