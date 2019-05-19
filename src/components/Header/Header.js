import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white">
                    <h5 className="my-0 mr-md-auto font-weight-bold">LOGO</h5>
                    <nav className="Header-Link my-2 my-md-0 mr-md-3">
                        <Link className="p-2 text-dark" to="/">Claims</Link>
                        <Link className="p-2 text-dark" to="/">About</Link>
                        <Link className="p-2 text-dark" to="/">Contact Us</Link>
                        <Link className="p-2 text-dark" to="/">Login</Link>
                    </nav>
                    {/* <Link className="btn btn-outline-primary" to="/">Sign up</Link> */}
                </div>
            </React.Fragment>
        );
    }
}

export default Header;