import React from 'react';
import ReactDOM from 'react-dom';
import BankRouter from './routers/BankRouter.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import bankStore from './store/bankStore.jsx';
import { addAccount, removeAccount, editAccount } from './actions/accounts.jsx';
import { Provider } from 'react-redux';



const store = bankStore();

//Subscribe
// store.subscribe(() => {
//     console.log(store.getState());
// });


//Actions

//Add-Account

store.dispatch(addAccount({ 
    accountType: 'Current Account',
    amount: 10000, 
    name: 'Amirah',
    password: '12345', 
    gender:"Female"

}))
store.dispatch(addAccount({ 
    accountType: 'Saving Account',
    amount: 10000, 
    password: "12345",
    name: 'Faizan',
    gender: 'male' 
}))
store.dispatch(addAccount({ 
    accountType: 'Saving Account',
    amount: 15000, 
    name: 'Hadia',
    password: '12345', 
    gender:"Female" }
))
store.dispatch(addAccount({ 
    accountType: 'Current Account', 
    amount: 1000, 
    name: 'Zoraiz', 
    password: '12345', 
    gender : 'male',
}))

//Remove-Account
// store.dispatch(removeAccount({ id: expenseOne.account.id }))





const jsx = (
    <Provider store={store}>
        <BankRouter/>
    </Provider>
);



var app = document.getElementById('content');
ReactDOM.render(jsx, app)