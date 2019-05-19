import React, { Component } from 'react';

import './Think.css';

import DeviceGIF from '../../images/DeviceGIF.png';
import InsuredGIF from '../../images/InsuredGIF.png';

class Think extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row mb-2">
                        <div className="Think-Box col-md-4">
                            <div className="">
                                <img className="img-fluid w-100" alt="bnj" src={DeviceGIF} />
                            </div>
                        </div>
                        <div className="Think-Box col-md-4">
                            <div className="Select-Button">
                               <button>Select</button> 
                            </div>
                        </div>
                        <div className="Think-Box col-md-4">
                            <div className="">
                                <img className="img-fluid w-100" alt="bnj" src={InsuredGIF} />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Think;