import React from 'react';
import { useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

function FeedbackContent() {
    const understanding = useSelector(store => store.understanding)
    const dispatch = useDispatch();
    const history = useHistory();

    const increaseUnderstanding = () => {
    const action = {type: 'INCREASE_UNDERSTANDING'};
    dispatch(action);}

    const decreaseUnderstanding = () => {
    const action = {type: 'DECREASE_UNDERSTANDING'};
    dispatch(action);}
    

    const handleClick = (e) => {
        history.push('/supported');
    }
    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <p>{understanding}</p> 
            <button onClick={increaseUnderstanding}> +1</button> 
            <button onClick={decreaseUnderstanding}> -1</button>
            <br></br>
            <button onClick={handleClick}>Next</button>
        </div>

    )};



    export default FeedbackContent;