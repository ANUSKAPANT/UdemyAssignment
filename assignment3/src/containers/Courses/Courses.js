import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Course from '../Courses/Course/Course';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            {id: 1, title: 'ReactJs : Beginners Course'},
            {id: 2, title: 'Python : Specialization Course'},
        ],
        
    }
    // clickHandler = ( id ) => {
    //     if(this.props.match.params.id === id) {
    //         this.setState({
    //             show : true
    //         });
    //     }
       
    //     this.props.history.push( '/courses/' + id );
    // }
    
    render() {
        let courseList = this.state.courses.map(course => {
            return(
                <Link to={{
                    pathname: this.props.match.url + '/' + course.id , 
                    search: '?title=' + course.title
                }} key={course.id}>

                    <div className ='Course'>{course.title}</div>
                    
                </Link>
                
            );
            
        });

        return (
            <React.Fragment>
                <div className='Courses'>
                {courseList}

                </div>
                <Route path={this.props.match.url + '/:id'} component={Course} />
            </React.Fragment>  
        )
    }
}

export default Courses;
