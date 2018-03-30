import React from 'react';
import { Link } from 'react-router-dom';

const ShowForm = (props) => {
    let gender = props.account.gender.charAt(0).toUpperCase() + props.account.gender.substr(1);
    return (
        <div className="container">
            <h2 style={{ padding: 10 + 'px' }}>Account Information:</h2>
            <table className="table table-bordered table-striped" style={{ backgroundColor: "white" }}>

                <tbody>
                    <tr>
                        <th >Name</th>
                        <td >{props.account.name}</td>
                    </tr>

                    <tr>
                        <th>Gender</th>
                        <td>{gender}</td>
                    </tr>
                    <tr>
                        <th scope="row">Current Amount</th>
                        <td>{props.account.amount.toString()}</td>
                    </tr>
                    <tr>
                        <th scope="row">Account Type</th>
                        <td>{props.account.accountType}</td>
                    </tr>
                    <tr>
                        <th scope="row">Total Deposits</th>
                        <td>{props.account.totalDeposits.toString()}</td>
                    </tr>
                    <tr>
                        <th scope="row">Total Withdraw</th>
                        <td>{props.account.totalWithdraw}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <Link
                                to={`/edit/${props.account.id}`}
                                style={{ float: "right", width: 60 + 'px' }}
                                className="btn btn-warning"
                            >Edit</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}


export default ShowForm;