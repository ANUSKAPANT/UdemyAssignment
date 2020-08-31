import React from 'react';
import './Char.css';


const Char = (props) => {
    return (
        <div className='box' onClick={props.deleted}>
            <p>{props.char}</p>
        </div>
    );
}

export default Char;
