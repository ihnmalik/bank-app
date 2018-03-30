import React from 'react';
import { connect } from 'react-redux';
import AccountListItems from './accountListItems.jsx';

const AccountList = (props) => {
    return (
        <div >
            <h1 style={{textAlign: "center"}}>All Accounts</h1>
            {
                props.accounts.slice(0).reverse().map((account)=>{
                    return <AccountListItems key={account.id} {...account}/>
                })
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        accounts: state
    }
}

export default connect(mapStateToProps)(AccountList);