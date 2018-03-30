import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../bank-components/Header.jsx';
import Home from '../bank-components/Home.jsx';
import AddAccount from '../bank-components/addAccount.jsx';
import ShowAccount from '../bank-components/showAccount.jsx';
import EditAccount from '../bank-components/editAccount.jsx';
import TransactionDeposits from '../bank-components/transactionDeposits.jsx';
import TransactionWithdraw from '../bank-components/transactionWithdraw.jsx';
import NotFound from '../bank-components/notFound.jsx';
import AboutHasaan from '../bank-components/aboutHasaan.jsx';

const BankRouter = () => (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact={true}/>
                    <Route path="/add" component={AddAccount}/>
                    <Route path="/show/:id" component={ShowAccount}/>
                    <Route path="/edit/:id" component={EditAccount} />
                    <Route path="/deposit/:id" component={TransactionDeposits} />
                    <Route path="/withdraw/:id" component={TransactionWithdraw}/>
                    <Route path="/profile" component={AboutHasaan} />
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
);

export default BankRouter;