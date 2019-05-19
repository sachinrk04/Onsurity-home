import React, { Component } from 'react';

import './Banner.css';
import LadyWithPhone from '../../images/LadyWithPhone.png'

class Banner extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row mb-2">
                        <div className="Simple col-md-6">
                           <div>
                                <h2>Simple</h2>
                                <p>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
                           </div> 
                        </div>
                        <div className="col-md-6">
                            <div className="">
                                <img className="img-fluid w-100" alt="bnj" src={LadyWithPhone} style={{height:"350px"}} />
                            </div>
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <div className="">
                                <img className="img-fluid w-100" alt="bnj" src={LadyWithPhone} style={{height:"350px"}} />
                            </div>
                        </div>
                        <div className="Simple col-md-6">
                           <div>
                                <h2>Smart</h2>
                                <p>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
                           </div> 
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="Simple col-md-6">
                           <div>
                                <h2>Affordable</h2>
                                <p>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
                           </div> 
                        </div>
                        <div className="col-md-6">
                            <div className="">
                                <img className="img-fluid w-100" alt="bnj" src={LadyWithPhone} style={{height:"350px"}} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="Banner-Button">
                            <button>Check Our Prices</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Banner;