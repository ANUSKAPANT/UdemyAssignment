import React from 'react';
import { configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Validation from './Validation';


configure({ adapter: new Adapter() });

describe('<Validation />', () => {
    
    it('testing props', () => {
        const wrapper = shallow(<Validation length={4} />);
        expect(wrapper.find('p').text()).toEqual('Text too short!');
           
    });  

});