import React from 'react';
import { render,  screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Char from './Char';

describe('<Char />', () => {

  it('should display the passed prop and onClick event fired', () => {
   
    const { rerender } = render(<Char char={'hello'} />);
    const element = screen.getByText('hello');
    expect(element).toBeInTheDocument();

    const handleClickMock = jest.fn()
    rerender(<Char deleted={handleClickMock} char={'hello'} />);
    userEvent.click(screen.getByText('hello'));
    expect(handleClickMock).toHaveBeenCalledTimes(1); 
   
  });

  // it(' onClick event fired', () => {
  //   const handleClickMock = jest.fn()
  //   const { container, debug } = rerender(<Char deleted={handleClickMock} />);
  //   userEvent.click(container.firstChild);
  //   expect(handleClickMock).toHaveBeenCalledTimes(1); 
  // });

});