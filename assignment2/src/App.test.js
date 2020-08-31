import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import App, {handleChange, deleteChar} from './App';
import Char from './Char/Char';
import Validation from './Validation/Validation';


configure({ adapter: new Adapter() });

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders  <Char /> component', () => {
    expect(wrapper.find(Char)).toHaveLength(wrapper.state('char').length);
  });

  it('renders three <Validation /> components', () => {
    expect(wrapper.find(Validation)).toHaveLength(1);
  });

  it('testing onChange event', () => {
    const onChange = jest.fn()
    const event = {
      target:{
        value: "Max"
      }
    };
    const input = wrapper.find('input');
    input.simulate('change', event); 
    expect(wrapper.state('char')).toBe('Max');
    
  });

  it('testing delete function', () => {
    wrapper.instance().setState({ char : 'Anuska'});
    wrapper.instance().deleteChar(0);
    expect(wrapper.state('char')).toBe('nuska');  
    
  });

  // it('testing value change handleChange function', () => { 
  //   const event = {
  //     target:{
  //       value: "Max"
  //     }
  //   }; 
  //   expect(wrapper.state('char')).toEqual('');
  //   wrapper.instance().handleChange(event);
  //   expect(wrapper.state('char')).toEqual('Max');  
    
  // });

});

