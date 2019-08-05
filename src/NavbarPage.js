import React from 'react';

class NavbarPage extends React.Component {

  render() {
    return (
        <nav className="navbar navbar-primary fixed-top" style={{backgroundColor:"rgba(0,0,0,0)"}}>
          <a className="navbar-brand p-0 color-1"  href="#" style={{width: "84px" }}><img src="images/logo@2x.png" className="w-100"/></a>
          <div>
            <button className="btn btn-lg my-0 color-1" style={{width: "145px"}} type="submit">Contact</button>
            <button className="navbar-toggler align-middle" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="w-100 text-color-1 align-middle" style={{fontSize: "42px"}}>
                <i className="fa fa-align-right"></i>
                </span>
            </button>
          </div>
        </nav>
    );
  }
}

export default NavbarPage;