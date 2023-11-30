import React from 'react';
import { useHistory } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

function FeedbackFeelings() {
    const feelings = useSelector(store => store.feelings)
    const dispatch = useDispatch();
    const history = useHistory();

    const increaseFeelings = () => {
        if(feelings < 10) {
        const action = {type: 'INCREASE_FEELINGS'};
        dispatch(action);
        }
    }

    const decreaseFeelings = () => {
        if(feelings > 0){
    const action = {type: 'DECREASE_FEELINGS'};
    dispatch(action);
    }
}

    const handleClick = (e) => {
        history.push('/content');        
    }
    return (
        

        
        <div>
            <h1>How are you feeling today?</h1>
            <p>{feelings}</p> 
            <button onClick={increaseFeelings}> +1</button> 
            <button onClick={decreaseFeelings}> -1</button>
            <br></br>
            <button onClick={handleClick}>Next</button>
            
        </div>
    )};



    export default FeedbackFeelings;