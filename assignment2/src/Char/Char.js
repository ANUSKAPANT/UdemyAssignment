import React from 'react';
import './Char.css';


const Char = (props) => {
    return (
        <div className='box' onClick={props.delete}>
            <p onClick={props.delete}>{props.char}</p>
        </div>
    );
}

export default Char;
