import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feedback from '../Feedback/Feedback.jsx';
import FeedbackFeelings from '../FeedbackFeelings/FeedbackFeelings.jsx';
import FeedbackContent from '../FeedbackContent/FeedbackContent.jsx';
import FeedbackSupported from '../FeedbackSupported/FeedbackSupported.jsx';
import FeedbackComments from '../FeedbackComments/FeedbackComments.jsx';
import Home from '../Home/Home.jsx';

function App() {

  return (
    <div className='App'>
      <Router>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <ul>
        <li><Link to="/feelings">How are you feeling today?</Link></li>
        <li><Link to="/content">How well are you understanding the content?</Link></li>
        <li><Link to="/supported">How well are you being supported?</Link></li>
        <li><Link to="/comments"> Any comments you want to leave?</Link></li>
        <li><Link to="/"> Home</Link></li>
      </ul>
      <Route exact path="/feelings">
        <FeedbackFeelings />
      </Route>
      <Route exact path="/content">
        <FeedbackContent />
     </Route>
     <Route exact path="/supported">
        <FeedbackSupported />
    </Route>
    <Route exact path="/comments">
        <FeedbackComments />
    </Route>
    <Route exact path="/feedback">
        <Feedback />
    </Route>
    <Route exact path="/">
    <h1>Start feedback survey?</h1>
        <Home />
    </Route>

      </Router>
    </div>
  );
}

export default App;
