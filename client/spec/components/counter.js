import {mount} from 'enzyme';

const renderCounter = (component) => {
    const wrapper = mount(component);

    const incrementButton = wrapper.findWhere(element => element.text() === 'Increment');
    const decrementButton = wrapper.findWhere(element => element.text() === 'Decrement');
    const label = wrapper.find('p');

    return {
        increment: () => incrementButton.simulate('click'),
        decrement: () => decrementButton.simulate('click'),
        label: () => label.text()
    }
};

export default renderCounter;