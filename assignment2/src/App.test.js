import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('<App />', () => {

  it('should update value input changes', () => {
    const {getByLabelText} = render(<App />);
    const input = getByLabelText('Enter');
    const p = screen.getByText('Count : 0');

    userEvent.type(input, 'Text');
    expect(input.value).toEqual('Text');
    expect(p).toHaveTextContent('Count : 4');

  });

});