import { expect } from 'chai'
import { shallow } from 'enzyme'
import React from 'react'

import Todo from './Todo'

function assertItem(wrapper, text, toggle) {
    expect(wrapper).to.have.exactly(1).descendants('li')   
    expect(wrapper.find('li')).to.have.text(text)
    expect(wrapper.find('li')).to.contain.style('text-decoration', toggle ? 'line-through' : 'none')
}

describe('Todo rendering', ()=>{
    it('4. should render the item as incomplete if Todo has completed property false',() =>{
        const wrapper = shallow(<Todo text='foo' completed={false} onClick={()=>{}}/>)
        assertItem(wrapper, 'foo', false)
    })
})

describe('Todo on click',()=>{
    it('5. should call onClick once when clicking to toggle',()=>{
        const onClickSpy = jest.fn()
        const wrapper = shallow(<Todo text='foo' completed={false} onClick={onClickSpy}/>)
        wrapper.find('li').simulate('click')
        expect(onClickSpy).to.have.been.calledOnce
    })
})