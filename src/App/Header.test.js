import React from 'react'
import {shallow} from 'enzyme';
import Header from './Header'

describe('Testing Header component', () => {
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Header />)
    })
    it('renders two links in navbar', ()=>{
        let wrapperA = wrapper.find('a');
        expect(wrapperA.length).toEqual(2);
    })
    it('render header text correctly', () => {
        let wrapperHref = wrapper.find('a').first()
        expect(wrapperHref.render().text()).toContain('முகப்பு');
    })
})