import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>{props.userName}</p>
            <p> Random Text!</p>
        </div>
    );
};

export default userOutput;