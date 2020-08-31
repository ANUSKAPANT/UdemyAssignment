import * as React from 'react';
import { render, screen } from '@testing-library/react';
import CounterControl from './CounterControl';
import { fireEvent } from '@testing-library/dom';

describe('<CounterOutput />', () => {

    it('should display the label', () => {
        
        const { container } = render(<CounterControl label={ 'Increment' } />);
        const element = container.querySelector('.CounterControl');
        expect(element.textContent).toBe('Increment');

    });

    it('should mock onClick', () => {
        const clicked = jest.fn();
        const { container } = render(<CounterControl clicked={clicked} />);
        
        const element = container.querySelector('.CounterControl');
        fireEvent.click(element);
        expect(clicked).toHaveBeenCalled();

    });
  
});

