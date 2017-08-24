
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import configureStore from './store';
//import MessageList from './components/MessageList';
import Projects from './components/Projects';
import registerServiceWorker from './registerServiceWorker';
const store = configureStore(); // You can also pass in an initialState here
render(
    <Provider store={store}>
        <Projects />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
