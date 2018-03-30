import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {  Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';


class WithdrawForm extends React.Component {
    constructor(props) {
        super(props);
        this.onWithdrawChange = this.onWithdrawChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCheckPassword = this.onCheckPassword.bind(this);
        this.toggle = this.toggle.bind(this);

        this.state = {
            permissionGranted: false,
            withdrawAmount: '',
            password: props.account.selectedAccount.password,
            currentAmount: props.account.selectedAccount.amount,
            error: '',
            subError:'',
            modal: false
        }
    }
    onWithdrawChange(e) {
        const withdrawAmount = e.target.value;

        if (parseInt(withdrawAmount) > this.state.currentAmount) {
            this.setState(() => ({ error: 'Please Enter Valid Amount' }))
        }

        if (!withdrawAmount || withdrawAmount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ withdrawAmount }))
        } 
        
    }
    onSubmit(e) {
        e.preventDefault();
        const checkAmount = e.target.elements.withdrawField.value
        if(checkAmount>this.state.currentAmount){
            this.setState(() => ({modal: true, error:"Invalid Amount", subError:"Please Enter an Valid Amount"}))
            this.state.withdrawAmount = '';
        }
        else{
        this.props.onSubmit({
            withdrawAmount: parseFloat(this.state.withdrawAmount, 10)
        });
    }
    }
    onCheckPassword(e) {
        e.preventDefault();
        let passToCheck = e.target.elements.passwordCheck.value
        if (passToCheck === this.state.password) {
            this.setState(() => ({ permissionGranted: true }))
        } else {
            this.setState(() => ({modal: true, error:'Incorrect Password', subError: 'Please Enter Correct Password'}))
            e.target.elements.passwordCheck.value = '';
        }
    }
    toggle(){
        this.setState(()=> ({modal: false}))
    }
    render() {
        return (
            <div className="container" style={{ marginTop: 30 + "px", background: 'white', padding: 40 + 'px', height: 300+'px' }}>

                {!this.state.permissionGranted &&
                    <h3
                        style={{ padding: 10 + 'px', marginBottom: 35 + 'px' }}
                    >Verify it's you</h3>
                }

                {this.state.permissionGranted &&
                    <div>
                        <h3>
                            <span
                                className={`badge badge-pill ${this.state.withdrawAmount > this.state.currentAmount || this.state.currentAmount === 0 ? "badge-danger" : "badge-light"}`}
                                style={{ float: "right" }}>Current Amount: {this.state.currentAmount}
                            </span>
                        </h3>
                        <h3
                            style={{ padding: 10 + 'px', marginBottom: 35 + 'px' }}
                        >Withdraw Amount:</h3>
                    </div>
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
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup className="row">
                            <Label
                                className={`col-sm-2 ${this.state.withdrawAmount > this.state.currentAmount ? "text-danger": ""}`}
                                for="exampleEmail"
                            >Enter Amount:</Label>
                            <div className="col-sm-7">
                                <Input
                                    type="text"
                                    name="withdrawField"
                                    id="exampleName"
                                    placeholder="Enter Amount to Withdraw"
                                    value={this.state.withdrawAmount}
                                    onChange={this.onWithdrawChange}
                                    autoFocus
                                    required="required"
                                    disabled={this.state.currentAmount===0}
                                    className={`form-control ${this.state.withdrawAmount > this.state.currentAmount ? "is-invalid": ""}`}
                                    
                                />
                            </div>
                            <div className="col-sm-3">
                                <Button disabled={this.state.currentAmount===0} >Withdraw</Button>
                                <Link to="/" className="btn">Cancel</Link>
                            </div>
                        </FormGroup>
                        <FormGroup style={{float: "right"}}>
                            
                        </FormGroup>
                    </Form>
                }

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.error}>
                    <ModalHeader toggle={this.toggle} className="text-danger">{this.state.error}</ModalHeader>
                    <ModalBody>
                        {this.state.subError}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>




            </div>
        );
    }
}




export default WithdrawForm;