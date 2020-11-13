import React from 'react';
import { shallow } from 'enzyme';
import Congrats from './Congrats';
import { findByTestAtrr, checkProps } from '../../../test/test.utils';


const defaultProps = { success: false };

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps} />)
}

test("renders without error", () => {
    const wrapper = setup({ success: false });
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

test("Does not throw a warning with expected props", () => {
    const expectedProps = { success: false };
    const propError = checkProps(Congrats, expectedProps);
    expect(propError).toBeUndefined();
});