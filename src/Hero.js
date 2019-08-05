import React, { Component } from 'react';

function Hero() {
    return (
        <div className="bd-example">            
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <div className="position-absolute carousel-box"></div>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/slider/slid_01.png" className="d-block w-100" alt="images/slider/slid_01.png" />
                        <div className="carousel-caption d-none d-md-block text-left mb-5">
                            <h1 className="font2 font-size-1 text-color-4">UI/UX</h1>
                            <h2 className="font2 font-size-1 font-weight-bold text-color-2">Research</h2>
                            <button className="btn btn-lg my-0 color-2" style={{width: "165px"}} type="submit">
                                Let's Talk
                                <i className="fa fa-arrow-right font-weight-lighter ml-4"></i>
                            </button>
                            <p className="font-size-2 mt-5 font-weight-bold">Develop digital information technologies for <span className="color-1 text-dark p-2">Micro to Macro</span> bussiness</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/slider/slid_02.png" className="d-block w-100" alt="images/slider/slid_01.png" />
                        <div className="carousel-caption d-none d-md-block text-left mb-5">
                            <h1 className="font2 font-size-1 text-color-4">UI/UX</h1>
                            <h2 className="font2 font-size-1 font-weight-bold text-color-2">Research</h2>
                            <button className="btn btn-lg my-0 color-2" style={{width: "165px"}} type="submit">
                                Let's Talk
                                <i className="fa fa-arrow-right font-weight-lighter ml-4"></i>
                            </button>
                            <p className="font-size-2 mt-5 font-weight-bold">Develop digital information technologies for <span className="color-1 text-dark p-2">Micro to Macro</span> bussiness</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/slider/slid_03.png" className="d-block w-100" alt="images/slider/slid_01.png" />
                        <div className="carousel-caption d-none d-md-block text-left mb-5">
                            <h1 className="font2 font-size-1 text-color-4">UI/UX</h1>
                            <h2 className="font2 font-size-1 font-weight-bold text-color-2">Research</h2>
                            <button className="btn btn-lg my-0 color-2" style={{width: "165px"}} type="submit">
                                Let's Talk
                                <i className="fa fa-arrow-right font-weight-lighter ml-4"></i>
                            </button>
                            <p className="font-size-2 mt-5 font-weight-bold">Develop digital information technologies for <span className="color-1 text-dark p-2">Micro to Macro</span> bussiness</p>
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
    )
}


export default Hero;