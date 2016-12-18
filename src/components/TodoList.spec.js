import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'
import TodoList from './TodoList'
import Todo from './Todo'

describe('Pass props', () => {
    it('3. Passing completed: true to Todo', () => {
        const todos = [{id : 1, completed: true, text: 'foo'}];
        const wrapper = shallow(<TodoList todos={todos} onTodoClick={jest.fn()}/>);
        const todo = wrapper.find('Todo').first();

        expect(todo).to.have.prop('id');
        expect(todo).to.have.prop('completed');
        expect(todo).to.have.prop('text');

        expect(todo).to.have.prop('id').equal(1);
        expect(todo).to.have.prop('completed').equal(true);
        expect(todo).to.have.prop('text').equal('foo');
       
    })

})