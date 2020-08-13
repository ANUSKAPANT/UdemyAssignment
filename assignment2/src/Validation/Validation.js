import React from 'react';

const Validation = (props) => {
    const text = props.length <= 5 ? (
        <p>Text too short!</p>
    ):(
        <p>Text long enough!</p>);

    return (
        <div>
            {text}
        </div>
    );
}

export default Validation;
