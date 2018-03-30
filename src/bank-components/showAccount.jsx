import React from 'react';
import {connect} from 'react-redux';
import ShowForm from './showForm.jsx';
import NotFound from './notFound.jsx';

const ShowAccount = (props) => {
    return(
    <div>
        <ShowForm account={props.account}/>
    </div>
)};

const mapStateToProps = (state, props) => {
    return {
        account: state.find((account)=> account.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(ShowAccount);