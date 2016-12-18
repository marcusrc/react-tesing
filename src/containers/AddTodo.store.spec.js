import React from 'react';
import { createStore } from 'redux';  
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import { default as ConnectedAddTodo, AddTodo } from './AddTodo';
//import AddTodo from './AddTodo';
import { default as todosReducer } from '../reducers/todos';
//import TodoList from '../components/TodoList';

function addItem(wrapper, item) {
    wrapper.find('input').get(0).value = item
    wrapper.find('input').simulate('change')
    wrapper.find('form').simulate('submit')
}

function assertItems(wrapper, items) {
    expect(wrapper).to.have.exactly(items.length).descendants('li')
    items.forEach((item, index) => {
        const itemLi = wrapper.find('li').at(index)
        expect(itemLi).to.contain.text(item.item)
        expect(itemLi).to.contain.text(item.done ? 'Not done' : 'Done')
    })
}

function getMounted() {
  const context = {
    store: createStore( todosReducer )
  }
  return mount(<ConnectedAddTodo/>, {context})
}

describe('AddTodo', () => {
  it('2. should render correct', () => {
    const wrapper = shallow(<AddTodo/>);
    
    expect(wrapper).to.have.exactly(1).descendants('form');
    expect(wrapper).to.have.exactly(1).descendants('input');
    expect(wrapper).to.have.exactly(1).descendants('button');

  })
})

describe('AddTodo submitting', () => {
		it('should clear the input on clicking the button', () => {
			// const onSubmit = jest.fn();
			const wrapper = getMounted();
      //const wrapper = mount(<ConnectedAddTodo />);
			addItem(wrapper, 'add 1');
      // assertItems([{ item: 'test 1', completed: false }])
      // expect(wrapper.find('form'))
			// // expect(onSubmit).to.have.been.calledWith('foo')
			expect(wrapper.find('input').get(0).value).to.equal('')
		})
	})
