import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navDiv">
                    <div className="pill">
                        <a href="#">Thing 1</a>
                    </div>
                    <div className="pill">
                        <a href="#">Thing 2</a>
                    </div>
                    <div className="pill">
                        <a href="#">Thing 3</a>
                    </div>
                    <div className="pill">
                        <a href="#">Thing 4</a>
                    </div>
                    <div className="pill">
                        <a href="#">Thing 5</a>
                    </div>
                </div>
                <div className="socLinks">
                </div>
            </div>
        );
    }
}

export default Navbar;
