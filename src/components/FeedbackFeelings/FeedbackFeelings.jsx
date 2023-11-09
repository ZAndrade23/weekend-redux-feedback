import React from 'react';
import { useHistory } from 'react-router-dom';

function FeedbackFeelings() {
    const history = useHistory();
    
    const handleClick = (e) => {
        history.push('/content');
    }
    return (
        

        
        <div>
            <h1>How are you feeling today?</h1>
            <button onClick={handleClick}>Next</button>
            
        </div>
    )};



    export default FeedbackFeelings;