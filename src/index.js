import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'redux-starter-kit';
import notebookReducer from './reducers/entries';
import filtersReducer from './reducers/filters';
import App from './components/App';
import './scss/styles.scss';
import 'normalize.css';
import * as serviceWorker from './serviceWorker';

const reducer = {
    entries: notebookReducer,
    filters: filtersReducer
  }
  
const store = configureStore({reducer});

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
