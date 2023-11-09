import React from 'react';
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();
    const handleClick = (e) => {
        history.push('/feelings');
    }
    return (
    <div>
        <h1>Start feedback survey?</h1>
        <button onClick={handleClick}>Start</button>
    </div>
    )

}

export default Home;