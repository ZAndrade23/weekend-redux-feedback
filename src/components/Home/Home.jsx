import React , { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
function Home() {
    let [feedbackList, setFeedbackList] = useState([]);
   
    useEffect(() => {
        console.log('in useEffect')
        getFeedback();
    }, []);

    const getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then((response) => {
            setFeedbackList(response.data);
        }).catch((err)=>{
            console.log(err);
        });
    };

    const history = useHistory();
    const handleClick = (e) => {
        history.push('/feelings');
    }
    console.log(feedbackList);
    return (
    <div>
            <table>
                <thead>
                    <tr>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbackList && feedbackList.map(feedback => (
                        <tr key={feedback.id}>
                            <td>
                                {feedback.feeling}
                            </td> 
                             <td>
                                {feedback.understanding}
                            </td>
                            <td>
                                {feedback.support}
                            </td>
                            <td>
                                {feedback.comments}
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        <button onClick={handleClick}>Start</button>
    </div>
    )

}

export default Home;