import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Validation from './Validation';

describe('<Validation />', () => {

  it('should display text according to length prop', () => {
    const {rerender} = render(<Validation length={'4'} />);
    let element = screen.getByText('Text too short!');
    expect(element).toBeInTheDocument();

    rerender(<Validation length={'9'} />);
    element = screen.getByText('Text long enough!');
    expect(element).toBeInTheDocument();
  });
 
});