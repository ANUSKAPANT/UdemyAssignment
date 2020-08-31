import React from 'react';
import { configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Char from './Char';


configure({ adapter: new Adapter() });

describe('<Char />', () => {
    let wrapper;
    let deleted;

    beforeEach(() => {
        deleted = jest.fn();
        const props = {
            char: "A",
            deleted,
        }
        wrapper = shallow(<Char {...props}/>);

    });

    it('testing props', () => {
        expect(wrapper.find('p').text()).toEqual('A');
           
    });  
    
    it('testing onClick event', () => {
        wrapper.find('div').simulate('click'); 
        expect(deleted).toHaveBeenCalled();

    });

});