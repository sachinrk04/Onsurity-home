import React, { Component } from 'react';
import LadyWithPhone from '../../images/LadyWithPhone.png';

import './Select.css';

class Select extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="px-3 py-5 pt-md-5 pb-md-4 mx-auto text-center">
                        <h1>Insurance that Works for You</h1>
                        <p className="lead">Simple. Smart. Affordable.</p>
                    </div>
                    <div className="row mb-2">
                        <div className="Select-Box col-md-6">
                           <div>
                               <select>
                                    <option value="brand">Select your brand</option>
                               </select>
                               <select>
                                    <option value="modal">Select your modal</option>
                               </select>
                               <select>
                                    <option value="buy">When did you buy it?</option>
                               </select>
                               <button type="submit">Get Insured</button>
                           </div> 
                        </div>
                        <div className="col-md-6">
                            <div className="">
                                <img className="img-fluid w-100" alt="bnj" src={LadyWithPhone} style={{height:"400px"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Select;