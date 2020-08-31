import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserInput from './UserInput';

describe('<UserInput />', () => {

  function setup() {
    const app = render(<UserInput />); 
    return { app, ...app };
  }
  
  it('should display input element with  userName value Max', () => {
    const { getByLabelText } = setup();
    const input = getByLabelText("Enter");
    expect(input.value).toEqual('');
  });

  it('should update value input changes', () => {
    const { getByLabelText } = setup();
    const input = getByLabelText("Enter");
    userEvent.type(input, 'John');
    expect(input.value).toEqual('John');
  });

});