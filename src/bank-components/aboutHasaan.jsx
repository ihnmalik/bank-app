import React from 'react';
import { Link } from 'react-router-dom';
import HasaanImg from './images/hasaanimg.png'
import HasaanImg2 from './images/img3.jpg';

const AboutHasaan = () => (
    <div>

        <div className="container" style={{maxWidth: 700+'px'}} >
            <h2 style={{ padding: 10 + 'px' }}>About Me:</h2>
            <table className="table table-bordered table-striped" style={{ backgroundColor: "white" }}>

                <tbody>
                    <tr>
                            <td colSpan="2" style={{textAlign: "center"}}>
                                <img style={{borderRadius: 1000}} src={HasaanImg2}/>
                            </td>
                     
                    </tr>
                    <tr>
                        <th >Name</th>
                        <td >Hasaan Naseer</td>
                    </tr>
                    <tr>
                        <th scope="row">Email</th>
                        <td><a href="mailto:ihnmalik@gmail.com">ihnmalik@gmail.com</a></td>
                    </tr>
                    <tr>
                        <th scope="row">Facebook</th>
                        <td><a href="https://www.facebook.com/ihnmalick">/ihnmalick</a></td>
                    </tr>
                    <tr>
                        <th scope="row">Twitter</th>
                        <td><a href="http://www.twitter.com/hnmalik">@hnmalik</a></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <Link
                                to="/"
                                style={{ float: "right", width: 60 + 'px' }}
                                className="btn btn-info "
                            >Back</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default AboutHasaan;