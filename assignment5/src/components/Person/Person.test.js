import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import Person from './Person';

describe('<Person />', () => {

    it('should display props', () => {
        const { getByText, container } = render(<Person name={'Sam'} age={40}/>);
        const person = container.querySelector('.Person');
        expect(person.textContent).toBe('Sam Age: 40')
    });

    it('should mock onClick', () => {
        const clicked = jest.fn();
        const { getByText, container } = render(<Person clicked={clicked}/>);
        const person = container.querySelector('.Person');
        fireEvent.click(person);
        expect(clicked).toHaveBeenCalled();   
    });
 

});