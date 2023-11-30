import React from 'react';
import {useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
function FeedbackComments()  {
    const history = useHistory();
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();
   let [ comment, setComment] = useState('');

    const handleClick = (e) =>  {
        e.preventDefault();
        console.log('Comment info:', comment);
        const action = {type: 'SET_COMMENT', payload: comment};
        dispatch(action);
        history.push('/feedback');

}
    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={handleClick}>
                <input
                onChange={(event) => setComment(event.target.value)} 
                value={comment}
                type="text"
                placeholder="Leave Comment Here"
                ></input>
            <button onClick={handleClick}>Next</button>
            </form>
        </div>
    )
    };



    export default FeedbackComments;