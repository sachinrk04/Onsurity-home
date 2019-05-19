import React, { Component } from 'react';
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import img4 from '../../images/img4.jpg'

class Carousel extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="bd-example">
                  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="img1" style={{height:"300px"}}/>
                        <div className="carousel-caption d-none d-md-block">
                          <h5>First slide label</h5>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="img1" style={{height:"300px"}}/>
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Second slide label</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <img src={img4} className="d-block w-100" alt="img1" style={{height:"300px"}}/>
                        <div className="carousel-caption d-none d-md-block">
                          <h5>Third slide label</h5>
                          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Carousel;