import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink as NavLinked,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';



class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });

    }
    nothing() {
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light className="bg-light" expand="md">
                    <NavbarBrand href="/">BankApp</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem onClick={this.state.isOpen ? this.toggle : this.nothing}>
                                <NavLink to="/" className="nav-link" exact={true}>Home</NavLink>
                            </NavItem>
                            <NavItem onClick={this.state.isOpen ? this.toggle : this.nothing}>
                                <NavLink to="/add" className="nav-link">Add Account</NavLink>
                            </NavItem>
                            <NavItem onClick={this.state.isOpen ? this.toggle : this.nothing}>
                                <NavLink to="/profile" className="nav-link">About Me</NavLink>
                            </NavItem>


                            {/* <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Transactions
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem onClick={this.state.isOpen ? this.toggle : this.nothing}>
                                        <NavLink to="/transaction/deposits/" className="nav-link">All Deposits</NavLink>
                                    </DropdownItem>
                                    <DropdownItem onClick={this.state.isOpen ? this.toggle : this.nothing}>
                                        <NavLink to="/transaction/withdraws" className="nav-link">All WithDraws</NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown> */}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
};







export default Header;
