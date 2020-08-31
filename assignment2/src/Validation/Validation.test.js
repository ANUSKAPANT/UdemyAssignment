import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Validation from './Validation';

describe('<Validation />', () => {

  it('should display text according to length prop', () => {
    render(<Validation length={'4'} />);
    const element = screen.getByText('Text too short!');
    expect(element).toBeInTheDocument();
  });

  it('should display text according to length prop', () => {
    render(<Validation length={'9'} />);
    const element = screen.getByText('Text long enough!');
    expect(element).toBeInTheDocument();
  });

});