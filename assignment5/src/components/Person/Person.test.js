import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Person from './Person';

describe('<Person />', () => {

    it('should display props and mock onClick', () => {
        const { getByTestId, rerender } = render(<Person name={'Sam'} age={40}/>);
        let person = getByTestId('Person');
        expect(person.textContent).toBe('Sam Age: 40');

        const clicked = jest.fn();
        rerender(<Person clicked={clicked}/>);
        person = getByTestId('Person');
        userEvent.click(person);
        expect(clicked).toHaveBeenCalled();   
    });

});