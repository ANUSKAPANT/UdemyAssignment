import * as React from 'react';
import { render, screen } from '@testing-library/react';
import CounterOutput from './CounterOutput';

describe('<CounterOutput />', () => {

    it('should display the current counter', () => {
        
        const { container } = render(<CounterOutput value={ 5 } />);
        // const element = screen.getByText('Current Counter: 5');
        const element = container.querySelector('.CounterOutput');
        expect(element.textContent).toBe('Current Counter: 5');
        expect(element.tagName).toEqual('DIV');
        
      });
  
});

