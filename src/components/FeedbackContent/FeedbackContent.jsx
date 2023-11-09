import React from 'react';
import { useHistory } from 'react-router-dom';


function FeedbackContent() {
    const history = useHistory();

    const handleClick = (e) => {
        history.push('/supported');
    }
    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <button onClick={handleClick}>Next</button>
        </div>

    )};



    export default FeedbackContent;