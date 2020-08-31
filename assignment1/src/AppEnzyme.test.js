import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import App, {handleChange} from './App';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';


configure({ adapter: new Adapter() });

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders one <UserInput /> component', () => {
    expect(wrapper.find(UserInput)).toHaveLength(1);
  });

  it('renders three <UserOutput /> components', () => {
    expect(wrapper.find(UserOutput)).toHaveLength(3);
  });

  it('testing value change handleChange function', () => {
    const event = {
      target:{
        value: "Harry"
      }
    };
    
    expect(wrapper.state('username')).toBe('Max');
    wrapper.instance().handleChange(event);
    expect(wrapper.state('username')).toBe('Harry');  
    
  });

  // it('using snapshot', () => {
  //   const event = {
  //     target:{
  //       value: 'Max'
  //     }
  //   };
  //   const wrapper = renderer.create(<App />);
  //   const instance = wrapper.getInstance();
  //   instance.handleChange(event);
  //   expect(wrapper).toMatchSnapshot();

  // });

});

