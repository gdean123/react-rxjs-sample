import {mount} from 'enzyme';

const renderPetSelector = (component) => {
    const wrapper = mount(component);

    const nextButton = wrapper.findWhere(element => element.text() === 'Next');
    const previousButton = wrapper.findWhere(element => element.text() === 'Previous');
    const label = wrapper.find('p');

    return {
        next: () => nextButton.simulate('click'),
        previous: () => previousButton.simulate('click'),
        label: () => label.text()
    }
};

export default renderPetSelector;