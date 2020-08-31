import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import { initialState, reducer } from '../store/reducer'
import Persons from './Persons';


const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
    ) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    }
}
 afterEach(cleanup);

describe('<Persons />', () => {

    it('checks initial UI', () => {
    
        const { getByText, container } = renderWithRedux(<Persons />);
        const addPerson = container.querySelector('.AddPerson');
        expect(addPerson.innerHTML).toBe('<button>Add Person</button>');
   
    });

    it('checks initial state has person', () => {
        
        const { getByText, container } = renderWithRedux(<Persons />, 
            {initialState: {persons: [
                {name: 'Max', age: 20}
            ]}});
        const Person = container.querySelector('.Person');
        expect(Person.textContent).toBe('Max Age: 20');
   
    });
    
});





