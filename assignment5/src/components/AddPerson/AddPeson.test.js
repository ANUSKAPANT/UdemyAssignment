import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import AddPerson from './AddPerson';
import userEvent from '@testing-library/user-event';

describe('<AddPerson />', () => {

    it('should mock onClick', () => {
        const personAdd = jest.fn();
        const { getByText } = render(<AddPerson personAdd={personAdd}/>);
        const button = getByText('Add Person');
        userEvent.click(button);
        expect(personAdd).toHaveBeenCalled();   
    });
 

});
