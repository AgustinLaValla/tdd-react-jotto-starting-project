import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';
import { findByTestAtrr } from '../../../test/test.utils';

configure({ adapter: new Adapter() });

const setup = (props = {}) => {
    return shallow(<Congrats {...props} />)
}

test("renders without error", () => {
    const wrapper = setup();
    const component = findByTestAtrr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test("renders no text when success prop is false", () => {
    const wrapper = setup({ success: false });
    const component = findByTestAtrr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

test("renders non-empty congrats message when success prop is true", () => { 
    const wrapper = setup({ success: true });
    const message = findByTestAtrr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
});