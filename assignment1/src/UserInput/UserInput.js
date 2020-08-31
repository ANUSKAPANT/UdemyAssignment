import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        margin : 'auto', 
        width: '40%',
        padding: '16px',
        marginTop: '10px',   
    };

    return (
        <div style={inputStyle}>
            <input aria-label="Enter" type="text" onChange={props.change} value={props.userName} />
        </div>
        
    );
};

export default userInput;