import React from 'react';
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'

//ADD-ACCOUNT
const addAccount = (
    { 
        description = '', 
        amount = 0, 
        accountType = '', 
        password = '', 
        name = '' 
    } = { }
) => ({
    type: 'ADD-ACCOUNT',
    account: {
        id: uuid(),
        description,
        amount,
        accountType,
        password,
        name
    }
});

//REMOVE-ACCOUNT
const removeAccount = ({id} = {}) => ({
    type: 'REMOVE-ACCOUNT',
    id
});

//EDIT-ACCOUNT
const editAccount = (id, updates) => ({
    type: 'EDIT-ACCOUNT',
    id,
    updates
});




// Bank Reducer

const bankDefaultState = []

const bankReducer = (state = bankDefaultState, action) => {
    switch (action.type) {
        case 'ADD-ACCOUNT':
            return [
                ...state,
                action.account
            ];
        case 'REMOVE-ACCOUNT':
            return state.filter((account)=> account.id !== action.id );
        case 'EDIT-ACCOUNT':
            return state.map((account)=>{
                if(account.id === action.id){
                    return {
                        ...account,
                        ...action.updates
                    };
                } else {
                    return account;
                }
            })
        default:
            return state;
    }
}


//Store Creation
const store = createStore(bankReducer);


//Subscribe
store.subscribe(() => {
    console.log(store.getState());
});


//Actions

//Add-Account
const expenseOne = store.dispatch(addAccount({ description: 'bank', amount: 2500, name: 'Hasaan' }));
const expenseTwo = store.dispatch(addAccount({ description: 'nothing', amount: 20, name: 'Faizan' }))

//Remove-Account
store.dispatch(removeAccount({id: expenseOne.account.id }))

//Edit-Account
store.dispatch(editAccount(expenseTwo.account.id , {amount: 300}));






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






