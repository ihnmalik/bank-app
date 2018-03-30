import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Link } from 'react-router-dom';

class DepositForm extends React.Component {
    constructor(props){
        super(props);

        this.onDepositChange = this.onDepositChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            depositAmount: ''
        }
    }
    onDepositChange(e) {
        const depositAmount = e.target.value;
        if (!depositAmount || depositAmount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ depositAmount }))
        }
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit({
                depositAmount:  parseFloat(this.state.depositAmount, 10)
        });
    }
    render() {
        return (
            <div className="container" style={{ marginTop: 30 + "px", background: 'white', padding: 40 + 'px', height: 300+'px'}}>
                <h3 style={{ padding: 10 + 'px', marginBottom: 35 + 'px' }}>Deposit Amount:</h3>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup className="row">
                        <Label
                            for="exampleEmail"
                            className="col-sm-2"
                        >Enter Amount:</Label>
                        <div className="col-sm-7">
                            <Input
                                type="text"
                                name="name"
                                id="exampleName"
                                placeholder="Enter Amount to Deposit"
                                value={this.state.depositAmount}
                                onChange={this.onDepositChange}
                                autoFocus
                                required="required"
                            />
                        </div>
                        <div className="col-sm-3">
                            <Button>Deposit</Button>
                            <Link to="/" className="btn">Cancel</Link>
                        </div>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default DepositForm;