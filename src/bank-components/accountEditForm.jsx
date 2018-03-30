import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { removeAccount } from '../actions/accounts.jsx';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AccountEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onGenderChange = this.onGenderChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onAccountChange = this.onAccountChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCheckPassword = this.onCheckPassword.bind(this);
        this.toggle = this.toggle.bind(this);

        this.check = props.account.account.amount ? true : false;
        this.newProps = props.account
        this.accounted = props.account.account


        this.state = {
            name:  props.account.account.name ? props.account.account.name : '' ,
            password: props.account.account.password ? props.account.account.password : '',
            gender: props.account.account.gender ? props.account.account.gender : '',
            accountType: props.account.account.accountType ? props.account.account.accountType : '',
            amount: '',
            passwordLength: '12345',
            nameLength: '123',
            error: '',
            permissionGranted: false,
        }
    }
    onNameChange(e) {
        const name = e.target.value;
        const nameLength = name.length
        if (!name || name.match(/^[A-Za-z]+$/, '')) {
            this.setState(() => ({
                name: name,
                nameLength
            }))
        };
    }
    onGenderChange(e) {
        const gender = e.target.value;
        this.setState(() => ({ gender }));
    }
    onPasswordChange(e) {
        const password = e.target.value;
        const passwordLength = password.length
        this.setState(() => ({
            password,
            passwordLength
        }))
    }
    onAccountChange(e) {
        const accountType = e.target.value;
        this.setState(() => ({ accountType }));
    }
    onAmountChange(e) {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        };
    }
    onSubmit(e) {
        e.preventDefault();
        if (this.state.passwordLength < 5 || this.state.nameLength < 3) {
            this.setState(() => ({ error: '* Please fill out correctly' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                name: this.state.name,
                password: this.state.password,
                gender: this.state.gender,
                accountType: this.state.accountType,
                modal: false
            });
        }
    }
    onCheckPassword(e) {
        e.preventDefault();
        let passToCheck = e.target.elements.passwordCheck.value
        if (passToCheck === this.state.password) {
            this.setState(() => ({ permissionGranted: true }))
        } else {
            this.setState(() => ({modal: true}))
            e.target.elements.passwordCheck.value = '';
        }
    }
    toggle(){
        this.setState(()=> ({modal: false}))
    }
    render() {
        return (
            <div className="container" style={{ marginTop: 30 + "px", background: 'white', padding: 40 + 'px' }}>
                
                {!this.state.permissionGranted &&
                    <h3
                        style={{ padding: 10 + 'px', marginBottom: 35 + 'px' }}
                    >Verify it's you</h3>
                }

                {!this.state.permissionGranted &&
                    <Form onSubmit={this.onCheckPassword} >
                        <FormGroup className="row" style={{ padding: 5 + 'px' }}>
                            <Label
                                className="col-sm-2"
                                for="enterPassword"
                            >Enter Password:</Label>
                            <div className="col-sm-8">
                                <Input
                                    type="password"
                                    name="passwordCheck"
                                    id="enterPassword"
                                    autoFocus
                                    placeholder="Enter Your Password"
                                />
                            </div>
                            <div className="col-sm-2" >
                                <Button >Verify</Button>
                            </div>
                        </FormGroup>
                    </Form>
                }
                {this.state.permissionGranted &&
                <div>
                <h3 style={{ padding: 10 + 'px', marginBottom: 35 + 'px' }}>Edit Account:</h3>
                {this.state.error && <p className="text-danger">{this.state.error}</p>}
                <Form onSubmit={this.onSubmit}>
                    <FormGroup className="row">
                        <Label
                            for="exampleEmail"
                            className={`col-sm-2 ${this.state.nameLength < 3 && "text-danger"}`}
                        >First Name:</Label>
                        <div className="col-sm-8">
                            <Input
                                type="text"
                                name="name"
                                id="exampleName"
                                placeholder="Enter Your Name"
                                value={this.state.name}
                                onChange={this.onNameChange}
                                autoFocus
                                required="required"
                                className={`form-control ${this.state.nameLength < 3 ? "is-invalid" : ""}`}
                            />
                        </div>
                        {
                            this.state.nameLength < 3 &&
                            <small className="text-danger col-sm-2">
                                Must be 3 or more characters long
                        </small>
                        }
                    </FormGroup>
                    <FormGroup className="row">
                        <Label
                            for="examplePassword"
                            className={`col-sm-2 ${this.state.passwordLength < 5 && "text-danger"}`}
                        >Password:</Label>
                        <div className="col-sm-8">
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="Enter Your Password"
                                value={this.state.password}
                                onChange={this.onPasswordChange}
                                required="required"
                                className={`form-control ${this.state.passwordLength < 5 ? "is-invalid" : ""}`}
                            />
                        </div>
                        {
                            this.state.passwordLength < 5 &&
                            <small className="text-danger col-sm-2">
                                Must be 5-20 characters long
                        </small>
                        }
                    </FormGroup>
                    <FormGroup className="row">
                        <Label for="exampleSelect" className="col-sm-2">Gender:</Label>
                        <div className="col-sm-8">
                            <Input
                                type="select"
                                name="select"
                                id="exampleSelect"
                                value={this.state.gender}
                                onChange={this.onGenderChange}
                            >
                                <option>Male</option>
                                <option>Female</option>
                            </Input>
                        </div>
                    </FormGroup>
                    <FormGroup className="row">
                        <Label for="accountType" className="col-sm-2">Select Account Type:</Label>
                        <div className="col-sm-8">
                            <Input
                                type="select"
                                name="select"
                                id="accountType"
                                value={this.state.accountType}
                                onChange={this.onAccountChange}
                            >
                                <option>Current Account</option>
                                <option>Saving Account</option>
                            </Input>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <Button >Submit</Button>
                        <Button
                                className="btn btn-danger"
                                style={{ float: "right" }}
                                onClick={() => {
                                    this.newProps.dispatch(removeAccount({ id: this.accounted.id }));
                                    this.newProps.history.push('/');
                                }}
                        >Remove</Button>
                    </FormGroup>
                </Form>
                </div>
                }

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.error}>
                    <ModalHeader toggle={this.toggle} className="text-danger">Incorrect Password</ModalHeader>
                    <ModalBody>
                        Please Enter Correct Password
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default AccountEditForm;