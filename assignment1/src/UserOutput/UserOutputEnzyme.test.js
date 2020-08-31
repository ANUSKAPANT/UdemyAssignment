import React from 'react';
import { configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserOutput from './UserOutput';


configure({ adapter: new Adapter() });

describe('<UserOutput />', () => {

    it('it should display the userName', () => {
        const wrapper = shallow(<UserOutput userName={ 'Max' }  />);              
        expect(wrapper.find('p').first().text()).toEqual('Max');
    });   

});