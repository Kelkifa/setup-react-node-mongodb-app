import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div id="navbar">
                <div class="left">
                    <button onclick="">
                        <h1>MW</h1>
                    </button>
                </div>
                <div class="right">
                    <button onclick="">
                        <h2>Home</h2>
                    </button>
                    <button onclick="">
                        <h2>Services</h2>
                    </button>
                    <button onclick="">
                        <h2>Products</h2>
                    </button>
                    <button onclick="">
                        <h2>SIGN UP</h2>
                    </button>
                </div>
            </div >
        )
    }
}

export default Navbar;