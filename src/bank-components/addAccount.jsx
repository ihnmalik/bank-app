import React from 'react';
import AccountForm from './accountForm.jsx';
import {connect } from 'react-redux';
import {addAccount} from '../actions/accounts.jsx';

const AddAccount = (props) => (
    <div>
        <AccountForm 
            onSubmit={(account) => {
                props.dispatch(addAccount(account));
                props.history.push('/')
            }}
        />
    </div>
);

export default connect()(AddAccount);