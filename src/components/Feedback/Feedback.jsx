import React from 'react'
import { useHistory } from 'react-router-dom';

function Feedback()  {
 const history = useHistory();
const handleClick = (e) => {
    history.push('/')
}

    return(
<div>
    <h1>Review your Feedback</h1>
    <button onClick={handleClick}>Submit</button>
</div>
    )
}


export default Feedback;