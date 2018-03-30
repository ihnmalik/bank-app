import React from 'react';
import { connect } from 'react-redux';
import DepositForm from './depositForm.jsx';
import {editAccount} from '../actions/accounts.jsx';

const TransactionDeposits = (props) => (
    <div>
       <DepositForm 
            account={props}
            onSubmit={(account)=> {
                props.dispatch(editAccount(props.match.params.id, account))
                props.history.push('/');
            }}
       />
    </div>
);

const mapStateToProps = (state, props) => {
    return {
        selectedAccount: state.find((account) => account.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(TransactionDeposits);