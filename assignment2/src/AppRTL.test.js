import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {

  it('should update value input changes', () => {
    const {container} = render(<App />);

    const input = container.querySelector('input');
    const p = container.querySelector('p')
    
    fireEvent.change(input, { target: { value: 'Text' } });
    expect(input.value).toEqual('Text');
    expect(p.textContent).toEqual('Count : 4');

  });

});