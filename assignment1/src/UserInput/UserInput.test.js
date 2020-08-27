import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserInput from './UserInput';


configure({ adapter: new Adapter() });

describe('<UserInput />', () => {

    it('testing onChange event', () => {
        const change = jest.fn();
        const props = {
            userName: "Max",
            change,
        }
        const wrapper = shallow(<UserInput {...props}/>);
        const input = wrapper.find('input');
        const event = {
            target: {
                value: 'Millie'
            }
        };

        expect(input.props('userName').value).toEqual('Max');
        input.simulate('change', event); 
        expect(change).toHaveBeenCalledWith(event);
           
    });   

});