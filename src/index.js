import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';
import App from './components/App/App';



const appStore = store()
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <React.StrictMode>
        <Provider store={appStore}>
        <App />
        </Provider>
    </React.StrictMode>
);
