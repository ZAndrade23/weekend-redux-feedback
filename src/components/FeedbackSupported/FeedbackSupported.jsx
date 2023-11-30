import React from 'react';
import { useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
function FeedbackSupported() {
    const support =useSelector(store => store.support);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const increaseSupport = () => {
        const action = {type: 'INCREASE_SUPPORT'};
        dispatch(action);
    }
    
        const decreaseSupport = () => {
        const action = {type: 'DECREASE_SUPPORT'};
        dispatch(action);
    }

    const handleClick = (e) =>  {
        history.push('/comments');
}
    return (
        <div>
            <h1>How well are you being supported?</h1>
            <p>{support}</p> 
            <button onClick={increaseSupport}> +1</button> 
            <button onClick={decreaseSupport}> -1</button>
            <br></br>
            <button onClick={handleClick}>Next</button>
        </div>
    )};



    export default FeedbackSupported;