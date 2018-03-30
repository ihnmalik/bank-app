import React from 'react';
import { createStore } from 'redux';
import bankReducer from '../reducers/accounts.jsx';



//Store Creation
export default () => {
    const store = createStore(
        bankReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store
};















const demoState = {
    accounts: [{
        id: 'Random',
        description: '',
        name: '',
        password: '',
        amount: '',
        accountType: ''
    }]
}






