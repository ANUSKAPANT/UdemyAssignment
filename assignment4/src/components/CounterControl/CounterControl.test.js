import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CounterControl from './CounterControl';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

describe('<CounterControl />', () => {

    it('should display the label and mock onClick', () => {
        const clicked = jest.fn();
        const { getByText } = render(<CounterControl clicked={clicked} label={ 'Increment' } />);
        const element = getByText(/Increment/i);
        expect(element).toBeInTheDocument();

        fireEvent.click(element);
        expect(clicked).toHaveBeenCalled();

    });
  
});

