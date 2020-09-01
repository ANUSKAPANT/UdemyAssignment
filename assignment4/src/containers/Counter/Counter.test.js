import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render, cleanup, fireEvent } from '@testing-library/react';
import useEvent from '@testing-library/react';
import { initialState, reducer } from '../../store/reducer'
import Counter from './Counter'
import '@testing-library/jest-dom/extend-expect';

describe('<Counter />', () => {

    const renderWithRedux = (component,
        { initialState, store = createStore(reducer, initialState) } = {}
          ) => {
          return {
              ...render(<Provider store={store}>{component}</Provider>),
              store,
          }
    };
      
    afterEach(cleanup);
      
      
    it('checks initial state is equal to 0', () => {
        const { getByText, container } = renderWithRedux(<Counter />);
        const counterOutput = container.querySelector('.CounterOutput');
        expect(counterOutput).toHaveTextContent('Current Counter: 0');
    });
      
    it('increments the counter through redux', () => {
        const { getByText, container } = renderWithRedux(<Counter />);
        const counterOutput = container.querySelector('.CounterOutput');
        const counterControl = getByText('Increment');
        fireEvent.click(counterControl);
        expect(counterOutput).toHaveTextContent('Current Counter: 1');
    
    });
    
    it('decrements the counter through redux', () => {
        const { getByText, container } = renderWithRedux(<Counter />);
        const counterOutput = container.querySelector('.CounterOutput');
    
        const counterControl = getByText('Decrement');
        fireEvent.click(counterControl);
        expect(counterOutput).toHaveTextContent('Current Counter: -1');
        
    });
    
    it('increments the counter by 5 through redux', () => {
        const { getByText, container } = renderWithRedux(<Counter />);
        const counterOutput = container.querySelector('.CounterOutput');
        const counterControl = getByText('Add 5');
        fireEvent.click(counterControl);
        expect(counterOutput).toHaveTextContent('Current Counter: 5');
        
    });
    
    
    it('decrements the counter by 5 through redux', () => {
        const { getByText, container } = renderWithRedux(<Counter />);
        const counterOutput = container.querySelector('.CounterOutput');
    
        const counterControl = getByText('Subtract 5');
        fireEvent.click(counterControl);
        expect(counterOutput).toHaveTextContent('Current Counter: -5');
    
    });
      
});



