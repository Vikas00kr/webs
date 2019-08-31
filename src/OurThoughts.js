import React, { Component } from 'react'

function OurThoughts(){
    return(
        <div className="color-4 pt-5 px-5 text-center overflow-hidden">
            <div className="row color-4 w-75 mx-auto my-5">
                <div className="col-6 w-25 p-0">
                    <div className="box-left">
                        <p className="h1 font-size-1 text-color-2">Our</p>
                        <p className="h1 font-size-1 text-dark" style={{lineHeight:"2.5rem"}}>thought</p>                    
                    </div>
                    <p className="text-left mt-4 pt-5 w-75 text-color-3 font-weight-bold text-muted font-size-3 font2">
                        Built clean, functional and secure
                        digital web application to
                        information technology software
                        for business ease.
                        Built clean, functional and secure
                        digital web application to
                        information technology software
                        for business ease.
                        Built clean, functional and secure
                        digital web application to
                        information technology software
                        for business ease.                                                                                                
                    </p>
                    {/* add class 'mx-auto' in below div to center align */}
                    <div className="row mt-5 pt-5 w-75">
                        <h5 className="font-size-2 mt-5 mb-5 text-color-2">- - Your Business our Platform - -</h5>
                        <div className="col-6">
                            <button className="btn btn-lg my-0 border-color-2" style={{ width: "165px" }} type="submit">
                                Know Us
                            </button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-lg my-0 border-color-2" style={{ width: "165px" }} type="submit">
                                Our Work
                            </button>                            
                        </div>
                    </div>
                </div>
                <div className="col-6 color-4 w-25 p-0">
                    <div className="text-left">
                        <img src="images/bob-newman-468003-unsplash.jpg" className="w-100" />
                    </div>
                </div>
            </div>
        </div>        
    )

}

export default OurThoughts;