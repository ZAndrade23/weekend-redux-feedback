import React from 'react';
import { useHistory } from 'react-router-dom';
function FeedbackComments()  {
    const history = useHistory();
    
    const handleClick = (e) =>  {
        history.push('/feedback');
}
    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <button onClick={handleClick}>Next</button>
        </div>
    )
    };



    export default FeedbackComments;