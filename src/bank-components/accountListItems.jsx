import React from 'react';
import maleLogo from './images/img1.png';
import femaleLogo from './images/img2.png'
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class AccountListItems extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
    render() {
        return (
            <div>
                <div className="container" style={{ textAlign: "center" }}>
                    <div style={{ float: "left", display: "inline-block", padding: 10 + "px" }}>
                        <div className="card" style={{ width: 200 + 'px', float: "left" }}>
                            <img className="card-img-top"
                                src={this.props.gender.toLowerCase() == 'female' ? femaleLogo : maleLogo}
                            />
                            <div className="card-body">
                                <h4 className="card-title">{this.props.name}</h4>
                                {/* <p className="card-text">-{this.props.accountType}-</p> */}
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                    <DropdownToggle caret className={`btn ${this.props.gender === "male" ? "btn-info" : "btn-danger"}`} >
                                        Transact
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem><Link className="nav-link" to={`/deposit/${this.props.id}`}>Deposit</Link></DropdownItem>
                                        <DropdownItem><Link className="nav-link" to={`/withdraw/${this.props.id}`}>Withdraw</Link></DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            <div className="card-footer">
                                <Link className="btn btn-light" to={`/show/${this.props.id}`}>
                                    <h5>View Account</h5>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// const AccountListItems = ({ name, description, amount, id, gender }) => (
//     <div>
//         <div className="container" style={{ textAlign: "center" }}>
//             <div style={{ float: "left", display: "inline-block", padding: 10 + "px" }}>
//                 <div className="card" style={{ width: 200 + 'px', float: "left" }}>
//                     <img className="card-img-top"
//                         src={gender == 'female' ? femaleLogo : maleLogo}
//                     />
//                     <div className="card-body">
//                         <h4 className="card-title">{name}</h4>
//                         <p className="card-text">{description}</p>
//                         <Link className="btn btn-warning btn-sm" to={`/edit/${id}`}>
//                             <h6>Edit</h6>
//                         </Link>
//                     </div>
//                     <div className="card-footer">
//                         <Link className="btn btn-primary" to={`/show/${id}`}>
//                             <h5>View Profile</h5>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// );



// class AccountListItems extends React.Component {
//     constructor(props){
//         super(props);

//     }
//     render() {
//         return (
//             <div>
//                 <div className="container" style={{ textAlign: "center" }}>
//                     <div style={{ float: "left", display: "inline-block", padding: 10 + "px" }}>
//                         <div className="card" style={{ width: 200 + 'px', float: "left" }}>
//                             <img className="card-img-top"
//                                 src={this.props.gender == 'female' ? femaleLogo : maleLogo}
//                             />
//                             <div className="card-body">
//                                 <h4 className="card-title">{this.props.name}</h4>
//                                 <p className="card-text">{this.props.description}</p>
//                                 <Link className="btn btn-warning btn-sm" to={`/edit/${this.props.id}`}>
//                                     <h6>Edit</h6>
//                                 </Link>
//                             </div>
//                             <div className="card-footer">
//                                 <Link className="btn btn-primary" to={`/show/${this.props.id}`}>
//                                     <h5>View Profile</h5>
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }



// const Cards = () => (

//             <div className="card" style={{ width: 200 + 'px', float: "left", marginRight: 10 + "px" }}>
//                 <img className="card-img-top" src={femaleLogo} />
//                 <div className="card-body">
//                     <h4 className="card-title">Hadia</h4>
//                     <p className="card-text">Some Example Text</p>
//                     <a href="#" className="btn btn-primary" >See Profile</a>
//                 </div>
//             </div>
//             <div className="card" style={{ width: 200 + 'px', float: "left", marginRight: 10 + "px" }}>
//                 <img className="card-img-top" src={maleLogo} />
//                 <div className="card-body">
//                     <h4 className="card-title">Faizan Malik</h4>
//                     <p className="card-text">Some Example Text</p>
//                     <a href="#" className="btn btn-primary" >See Profile</a>
//                 </div>
//             </div>
//             <div className="card" style={{ width: 200 + 'px', float: "left", marginRight: 10 + "px" }}>
//                 <img className="card-img-top" src={femaleLogo} />
//                 <div className="card-body">
//                     <h4 className="card-title">Amirah</h4>
//                     <p className="card-text">Some Example Text</p>
//                     <a href="#" className="btn btn-primary" >See Profile</a>
//                 </div>
//             </div>
//         </div>
//     </div>
// );





export default AccountListItems;