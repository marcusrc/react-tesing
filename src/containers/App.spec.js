import { createRenderer } from 'react-addons-test-utils'

import { expect } from 'chai'
import { shallow, mount } from 'enzyme'

import React from 'react'
import { createStore }  from 'redux'
//import todosReducer from '../reducers/todos'
import appReducer from '../reducers'
import { addTodo as addTodoAction} from '../actions'
// import App from './App'
import { default as ConnectedApp, App } from './App'
import AddTodo from '../components/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from '../components/Footer'

function addItem(wrapper, item) {
    // console.log('addItem>>> ', wrapper.find(AddTodo).find('input').get(0));
    wrapper.find(AddTodo).find('input').get(0).value = item;
    // console.log('addItem>>>value ', wrapper.find(AddTodo).find('input').get(0).value);
    wrapper.find(AddTodo).find('input').simulate('change');
    wrapper.find(AddTodo).find('form').simulate('submit');
}

function assertItems(wrapper, items) {
    // console.log('assertItem!!!', wrapper);
  
    expect(wrapper).to.have.exactly(items.length).descendants('li')
    items.forEach((item, index) => {
        const itemLi = wrapper.find('li').at(index)
        expect(itemLi).to.contain.text(item.text)
        expect(itemLi).to.contain.style('text-decoration', item.completed ? 'line-through' : 'none')
    })
}
function getMountedAndStore(initialState) {
    const store = createStore(appReducer, initialState)
    const context = { store }

    return [mount(<ConnectedApp />, { context }), store]
}

function getMounted(initialState = undefined) {
    return getMountedAndStore(initialState)[0]
}

describe('App', () => {
 it('should render correctly (react-addons-test-utils)', () => {
    const renderer = createRenderer()
    renderer.render(<App onAdd={jest.fn()}/>)
    const actual = renderer.getRenderOutput()
    console.log(actual);
    expect(actual.type).to.equal('div')
    //let children = actual.props.children;
    // expect(actual.props.children).to.deep.equal( [ [AddTodo], [VisibleTodoList], [Footer]])
 })

 it('1. should render correctly (enzyme shallow)', ()=>{
     const wrapper = shallow(<App onAdd={jest.fn()}/>)

     expect(wrapper).to.have.exactly(1).descendants(AddTodo)
     expect(wrapper).to.have.exactly(1).descendants(VisibleTodoList)
     expect(wrapper).to.have.exactly(1).descendants(Footer)

 })
})

describe('App (connected)', () => {
  it('should add an item to the list', ()=>{
      const wrapper = getMounted();

      addItem(wrapper, 'test 1')
      assertItems(wrapper, [{ id: 1, text: 'test 1', completed: false }])
  })
})

describe('App (connected with redux)',() => {
  describe('add item', () =>{ 
    it('should render items from the initial state', () => {
        const initialState = {
            todos: [
                { id: 0, text: 'test 1', completed: true },
                { id: 1, text: 'test 2', completed: false },
            ]
        }
        const wrapper = getMounted(initialState)

        assertItems(wrapper, [{ text:'test 1', completed: true }, { item: 'test 2', done: false }])
    })

    it('should add items to a list when calling the addTodo action', () => {
        const [wrapper, store] = getMountedAndStore({todos: [], visibilityFilter: 'SHOW_ALL'})

        store.dispatch(addTodoAction('test 1'))
        store.dispatch(addTodoAction('test 2'))

        assertItems(wrapper, [{ text: 'test 1' }, { text: 'test 2' }])
    })
    
  })
})

