import { createRenderer } from 'react-addons-test-utils'

import { expect } from 'chai'
import { shallow, mount } from 'enzyme'

import React from 'react'
import { creatStore }  from 'redux'
import App from './App'
import todosReducer from '../reducers/todos'
//import { default as ConnectedApp, App } from './App'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

// function addItem(wrapper, item) {
//     wrapper.find('input').get(0).value = item
//     wrapper.find('input').simulate('change')
//     wrapper.find('form').simulate('submit')
// }

// function assertItems(wrapper, items) {
//     expect(wrapper).to.have.exactly(items.length).descendants('li')
//     items.forEach((item, index) => {
//         const itemLi = wrapper.find('li').at(index)
//         expect(itemLi).to.contain.text(item.item)
//         expect(itemLi).to.contain.text(item.done ? 'Not done' : 'Done')
//     })
// }

describe('App', () => {
 it('should render correctly (react-addons-test-utils)', () => {
    const renderer = createRenderer()
    renderer.render(<App />)
    const actual = renderer.getRenderOutput()
    console.log(actual);
    expect(actual.type).to.equal('div')
    //let children = actual.props.children;
    // expect(actual.props.children).to.deep.equal( [ [AddTodo], [VisibleTodoList], [Footer]])
 })

 it('1. should render correctly (enzyme shallow)', ()=>{
     const wrapper = shallow(<App/>)

     expect(wrapper).to.have.exactly(1).descendants(AddTodo)
     expect(wrapper).to.have.exactly(1).descendants(VisibleTodoList)
     expect(wrapper).to.have.exactly(1).descendants(Footer)

 })
})

// describe('add item', ()=>{
//     it('should add an item to the list', ()=>{
//         const wrapper = mount(<App/>);

//         // addItem(wrapper, 'test 1')
//         // assertItems(wrapper, [{ item: 'test 1', done: false }])
//     })
// })