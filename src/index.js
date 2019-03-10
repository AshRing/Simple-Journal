import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { startSetEntries } from './actions/entries';
import thunk from 'redux-thunk';
import notebookReducer from './reducers/entries';
import filtersReducer from './reducers/filters';
import App from './components/App';
import './scss/styles.scss';
import 'normalize.css';
import './firebase/firebase';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = {
    entries: notebookReducer,
    filters: filtersReducer
  }
  
const store = createStore(combineReducers(reducers),
    composeEnhancers(applyMiddleware(thunk)));

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
);


ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetEntries()).then(() => {   //when startSetEntries successfully gets data from firebase, the app is rendered
  ReactDOM.render(jsx, document.getElementById('root'));
});
