import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Char from './Char';

describe('<Char />', () => {

  it('should display the passed prop', () => {
    render(<Char char={'hello'} />);
    const element = screen.getByText('hello');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('P');
   
  });

  it(' onClick event fired', () => {
    const handleClickMock = jest.fn()
    const { container, debug } = render(<Char deleted={handleClickMock} />);
    fireEvent.click(container.firstChild);
    expect(handleClickMock).toHaveBeenCalledTimes(1); 
  });

});