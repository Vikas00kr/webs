import React, { Component } from 'react'

function OurCustomers(){
    return(
        <div className="color-4 pt-5 px-5 text-center overflow-hidden">
            <div className="row color-4 w-75 mx-auto my-5">
                <div className="col-6 color-4 w-25 p-0">
                    <div className="text-left w-100 h-100 color-3">
                        {/* <img src="images/bob-newman-468003-unsplash.jpg" className="w-100" /> */}
                    </div>
                </div>
                <div className="col-6 w-25 p-0 push-right">
                    <div className="box-right">
                        <p className="h1 font-size-1 text-color-2">Our</p>
                        <p className="h1 font-size-1 text-dark" style={{lineHeight:"2.5rem"}}>customer</p>                    
                    </div>
                    <p className="text-left mt-4 pt-5 w-75 text-color-3 font-weight-bold text-muted font-size-3 font2">
                    We re the agency partner of focused
                    multinationals, ambitious challengers, and
                    nonprofit groups. To some, we partner in
                    journeys towards name growth, to others we
                    offer an additional creative, design,
                    development or strategy resource when the
                    work calls for it.                                                                                                 
                    </p>
                    {/* add class 'mx-auto' in below div to center align */}
                    <div className="row mt-5 pt-5 w-75 text-left">
                        <h5 className="font-size-2 mt-5 mb-5 text-color-3 font-weight-bold">
                            Browse through our client
                            partners. If you d like to join
                            them, we d love to hear from
                            you.
                        </h5>
                        <div className="col-6">
                            <button className="btn btn-lg my-0 border-color-2" style={{ width: "165px" }} type="submit">
                                Find us
                            </button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-lg my-0 border-color-2" style={{ width: "165px" }} type="submit">
                                Text us
                            </button>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )

}

export default OurCustomers;