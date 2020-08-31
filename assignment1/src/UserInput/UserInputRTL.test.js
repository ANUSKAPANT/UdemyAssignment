import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import UserInput from './UserInput';

describe('<UserInput />', () => {

  it('should display input element with  userName value Max', () => {
    render(<UserInput />);
    // const input = container.querySelector('input')
    const input = screen.getByTestId('input') ;
    expect(input.value).toEqual('');
  });

  it('should update value input changes', () => {
    const { getByTestId } = render(<UserInput />);
    const input = getByTestId('input') ;
    fireEvent.change(input, { target: { value: 'John' } });
    expect(input.value).toEqual('John');
  });

});