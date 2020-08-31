import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { initialState, reducer } from '../store/reducer';
import Persons from './Persons';


describe('<Persons />', () => {

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

    it('checks initial UI', () => {
    
        const { getByText } = renderWithRedux(<Persons />);
        const addPerson = getByText('Add Person');
        expect(addPerson).toBeInTheDocument();
   
    });

    it('checks initial state has person', () => {
        
        const { getByTestId } = renderWithRedux(<Persons />, 
            {initialState: {persons: [
                {name: 'Max', age: 20}
            ]}});
        const Person = getByTestId('Person');
        expect(Person.textContent).toBe('Max Age: 20');
   
    });
    
});





