import * as React from 'react';
import { render } from '@testing-library/react';
import CounterOutput from './CounterOutput';

describe('<CounterOutput />', () => {

    it('should display the current counter', () => {
        
        const { getByText } = render(<CounterOutput value={ 5 } />);
        const element = getByText('Current Counter: 5');
        expect(element).toBeInTheDocument;
         
      });
  
});

