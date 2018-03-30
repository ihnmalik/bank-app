import React from 'react';
import WithdrawForm from './withdrawForm.jsx';
import { connect } from 'react-redux';
import {editAccount} from '../actions/accounts.jsx';

const TransactionWithdraw = (props) => (
    <div>
         <WithdrawForm 
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

export default connect(mapStateToProps)(TransactionWithdraw);