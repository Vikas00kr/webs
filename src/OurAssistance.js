import React, { Component } from 'react'

function OurAssistance() {
    return (
        <div className="row color-1 w-100 mx-auto overlay-height">
            <div className="col-6 color-1 w-50 p-0">
                <div className="row w-100 position-relative p-5">
                    <div className="row mt-5 pt-2">
                        <div className="width-60 mx-auto">
                            <div className="box-left">
                                <p className="h1 font-size-1 text-color-2">Our</p>
                                <p className="h1 font-size-1 text-dark" style={{ lineHeight: "2.5rem" }}>assistance</p>
                            </div>
                            <p className="text-left mt-4 pt-5 w-75 text-color-3 font-weight-bold text-muted font-size-3 font2">
                                Our administrators, creatives,
                                designers, animators, copywriters,
                                developers, and customer service
                                pros work across a vast range of
                                classes, ways, and achievements.
                                With a full-service offering, we
                                cooperate between businesses and
                                regulations, basing resolutions on
                                essential insights with an
                                output that depends on the
                                objectives we want to accomplish
                                collectively.
                            </p>
                            {/* add class 'mx-auto' in below div to center align */}
                            <div className="row mt-5 pt-5">
                                <p className="h4 text-left font-weight-bold text-color-3" style={{ lineHeight: "3vw" }}>
                                    {"<HTML5></HTML5>"}<br/>
                                    { "{CSS3 : SCSS;}"}<br/>
                                    #Adobe #Figma #Corel<br/>
                                    Wordpress | Webflow<br/>
                                    /Php /Javscript /Jquery<br/>
                                    "MySQL"<br/>
                                    .Bootstrap .React .Net
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6 color-4 w-50 p-0">
                <div className="bgImage">
                    
                </div>
            </div>
            <div className="bg-white position-overlay">
                <div className="row w-100 h-50 p-0 m-0 mt-3">
                    <div className="col-6 w-50 p-5 mt-5">
                        <img src="images/service_illustration/undraw_wordpress_utxt.png" className="w-100" />
                        <div className="color-5 w-100 mx-auto px-3">
                            <h3 className="font1 font-size-2 font-weight-bold text-color-3 list-header text-right"><span className="color-5">Web Development</span></h3>                            
                            <ul className="list-dashed text-muted">
                                <li>Third-Party API Integration</li>
                                <li>eCommerce Website Development and CRO</li>
                                <li>Custom Web App Development</li>
                                <li>Content Management Systems (CMS)</li>
                                <li>Responsive Website Development</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 w-50 p-5 mt-5">
                        <img src="images/service_illustration/undraw_all_the_data_h4ki(1).png" className="w-100" />
                        <div className="color-5 w-100 mx-auto px-3">
                            <h3 className="font1 font-size-2 font-weight-bold text-color-3 list-header text-right"><span className="color-5">Digital Marketing</span></h3>
                            <ul className="list-dashed text-muted">
                                <li>Search Engine Marketing (SEM)</li>
                                <li>Search Engine Optimisation (SEO)</li>
                                <li>Content Marketing Strategy and Content Creation</li>
                                <li>Social Media Strategy and Advertising</li>
                                <li>Online Video Advertising</li>
                                <li>Website and Campaign Strategy</li>
                            </ul>
                        </div>
                    </div>                    
                </div>

                <div className="row w-100 h-50 p-0 m-0 mt-3">
                    <div className="col-6 w-50 p-5 mt-5">
                        <img src="images/service_illustration/undraw_android_jr64.png" className="w-100" />
                        <div className="color-5 w-100 mx-auto px-3">
                            <h3 className="font1 font-size-2 font-weight-bold text-color-3 list-header text-right"><span className="color-5">Games &amp; Application</span></h3>
                            <ul className="list-dashed text-muted">
                                <li>Andoroid mobile application</li>
                                <li>Native apps</li>
                                <li>CRM and Database sofatware</li>
                                <li>Windows application</li>
                                <li>SAAS application</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 w-50 p-5 mt-5">
                        <img src="images/service_illustration/undraw_logo_design_bjnx.png" className="w-100" />
                        <div className="color-5 w-100 mx-auto px-3">
                            <h3 className="font1 font-size-2 font-weight-bold text-color-3 list-header text-right"><span className="color-5">Graphics Design</span></h3>
                            <ul className="list-dashed text-muted">
                                <li>User Experience (UX) design</li>
                                <li>User Interface (UI) Design</li>
                                <li>Web App Design</li>
                                <li>Illustartion</li>
                                <li>Animation</li>
                                <li>Logo and Branding</li>
                            </ul>
                        </div>
                    </div>                    
                </div>                
            </div>
        </div>
    )

}

export default OurAssistance;