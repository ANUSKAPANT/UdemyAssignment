
import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
    
    it('should render the error page', () => {
        const { getByText } = renderWithRouter(<App />);
    
        const result = getByText('Page not found!');
        expect(result).toBeInTheDocument();   
    });
    
    it('should render the users page', () => {
        const { getByText } = renderWithRouter(<App />);

        const link = getByText('Users');
        userEvent.click(link);;
        const result = getByText('Users page');
        expect(result).toBeInTheDocument();    
    });

    it('should render the courses page and individual course content', () => {
        const { getByText, getByTestId} = renderWithRouter(<App />);
       
        const link = getByText('Courses');
        userEvent.click(link);
        let result = getByText('ReactJs : Beginners Course', 'Python : Specialization Course');
        expect(result).toBeInTheDocument();

        const link1 = getByText('ReactJs : Beginners Course');
        userEvent.click(link1);
        result = getByTestId('course')
        expect(result).toHaveTextContent('ReactJs : Beginners Course The course id is 1');  
           
    });    

});




