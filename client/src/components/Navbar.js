import React from 'react';
import './Navbar.scss';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import NavButton from './NavButton.js';
import './customScss/index.scss';

class Navbar extends React.Component {
    clickHandler() {
        console.log(1);
        // document.location = link;
    }
    render() {
        return (
            <Router>
                <div id="navbar">
                    <div className="left" >
                        <Link to="/home">
                            <NavButton
                                btnClass="btn--nav"
                                name="Home"
                                elm="h1" />
                        </Link>
                    </div>
                    <div className="right">
                        <Link to="/service">
                            <NavButton
                                btnClass="btn--nav"
                                name="Words"
                                elm="h2" />
                        </Link>
                        <Link to="/word">
                            <NavButton
                                btnClass="btn--nav"
                                name="Documents"
                                elm="h2" />
                        </Link>
                        <Link to="/anime">
                            <NavButton
                                btnClass="btn--nav"
                                name="Animes"
                                elm="h2" />
                        </Link>
                        <Link to="/login">
                            <NavButton
                                btnClass="btn--nav btn--login"
                                name="Sign in"
                                elm="h2" />
                        </Link>
                    </div>
                </div >
            </Router>
        )
    }
}

export default Navbar;