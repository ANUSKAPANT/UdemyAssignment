import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import AddPerson from './AddPerson';

describe('<AddPerson />', () => {

    it('should mock onClick', () => {
        const personAdd = jest.fn();
        const { getByText, container } = render(<AddPerson personAdd={personAdd}/>);
        const button = container.querySelector('button');
        fireEvent.click(button);
        expect(personAdd).toHaveBeenCalled();   
    });
 

});
