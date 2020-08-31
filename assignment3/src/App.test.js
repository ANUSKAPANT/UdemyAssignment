
import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import  App from './App'



describe('<App />', () => {
    const history = createMemoryHistory();

    const renderWithRouter = (component) => {  
        return { 
        ...render (
        <Router history={history}>
            {component}
        </Router>
        )
      }
    }
    
    
    it('should render the home page', () => {
        const { container, getByText, getByTestId } = renderWithRouter(<App />);

        expect(history.location.pathname).toBe('/');
        const result = getByText('Page not found!');
        expect(result).toBeInTheDocument();   
    });
    
    it('should render the users page', () => {
        const { container, getByText, getByTestId } = renderWithRouter(<App />);

        const link = getByText('Users');
        fireEvent.click(link);;
        const result = getByText('Users page');
        expect(result).toBeInTheDocument();    
    });

    it('should render the courses page and individual course content', () => {
        const { getByText, getByTestId} = renderWithRouter(<App />);
       
        const link = getByText('Courses');
        fireEvent.click(link);
        let result = getByText('ReactJs : Beginners Course', 'Python : Specialization Course');
        expect(result).toBeInTheDocument();

        const link1 = getByText('ReactJs : Beginners Course');
        fireEvent.click(link1);
        result = getByTestId('course')
        expect(result.textContent).toBe('ReactJs : Beginners Course The course id is 1');  
           
    });    

});




