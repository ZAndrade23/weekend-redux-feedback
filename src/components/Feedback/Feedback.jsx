import React from 'react'
import { useHistory } from 'react-router-dom';
import {useSelector, reset} from 'react-redux';
import axios from 'axios';
function Feedback()  {
    const feelings =useSelector(store => store.feelings);
    const understanding =useSelector(store => store.understanding);
    const support =useSelector(store => store.support);
    const comments =useSelector(store => store.comments)
 const history = useHistory();

 const review = {
    feelings,
    understanding,
    support,
    comments
 }


const handleClick = (e) => {
    axios.post('/feedback', review).then((response) => {
        console.log('POST feedback successful')
        var action = new Event( {type:'SUBMIT'})
        dispatchEvent(action);
        history.push('/')
    }).catch((error) => {
        console.error('POST order failed', error);
        alert('something went wrong');
    })
    
}
// axios({
//     method: 'G',
//     url: '/feedback'
// }).then((response) => {
//     setFeedbackList(response.data);
// }).catch((err)=>{
//     console.log(err);
// });
    return(
<div>
    <h1>Review your Feedback</h1>
    <ul>Todays Feelings: {feelings}</ul>
    <ul>Content Understanding: {understanding}</ul>
    <ul>Support Level: {support}</ul>
    <ul>Neccessary Comments: {comments}</ul>
    <button onClick={handleClick}>Submit</button>
</div>
    )
}


export default Feedback;