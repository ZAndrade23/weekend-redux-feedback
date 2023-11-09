import React from 'react';
import { useHistory } from 'react-router-dom';

function FeedbackSupported() {
    const history = useHistory();
    
    const handleClick = (e) =>  {
        history.push('/comments');
}
    return (
        <div>
            <h1>How well are you being supported?</h1>
            <button onClick={handleClick}>Next</button>
        </div>
    )};



    export default FeedbackSupported;