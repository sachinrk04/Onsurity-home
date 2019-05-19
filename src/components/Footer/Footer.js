import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="Footer py-5">
                    <div className="container">
                        <footer className="pt-md-5">
                            <div className="row">
                                <div className="col-12 col-md">
                                    <h1 className="font-weight-bold">LOGO</h1>
                                </div>
                                <div className="Navigation col-6 col-md">
                                    <h2>Navigation</h2>
                                    <ul className="list-unstyled text-small">
                                        <li><Link to="/">About</Link></li>
                                        <li><Link to="/">Products</Link></li>
                                        <li><Link to="/">Claims</Link></li>
                                        <li><Link to="/">Plans</Link></li>
                                        <li><Link to="/">Terms of Use</Link></li>
                                        <li><Link to="/">Sitemap</Link></li>
                                    </ul>
                                </div>
                                <div className="Navigation col-6 col-md">
                                    <ul className="list-unstyled text-small">
                                        <li><Link to="/">Brand Terms of Use</Link></li>
                                        <li><Link to="/">Cookie Use</Link></li>
                                        <li><Link to="/">Privacy Policy</Link></li>
                                        <li><Link to="/">Support</Link></li>
                                        <li><Link to="/">Login</Link></li>
                                    </ul>
                                </div>
                                <div className="Contact col-12 col-md  ">
                                    <div>
                                        <h2>Contact</h2>
                                        <p>info@onsurity.com <br/> +1234 234 2346</p>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;