import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'; 
import AccountForm from './accountForm.jsx';
import AccountEditForm from './accountEditForm.jsx';
import {editAccount, removeAccount} from '../actions/accounts.jsx';

const EditAccount = (props) => {
    return (
        <div>
            <AccountEditForm 
                account={props}
                onSubmit={(account)=>{
                    props.dispatch(editAccount(props.account.id, account));
                    props.history.push('/');
                }}
            />
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        account: state.find((account) => account.id === props.match.params.id )
    };
};


export default connect(mapStateToProps)(EditAccount);