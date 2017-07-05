import React, { Component } from 'react'
import './Intro.css';

export default class Body extends Component {
    render() {
        return (
            <div>
                <div className="App-header">
                    <p className="headline">A blog with a real name.</p>
                </div>
                <p className="App-intro">
                    <div> Hey, I'm Saman. I like JavaScript and Comics. Also, rock climbing. And hot sauce.</div>
                </p>
                <hr/>
            </div>
        );
    };
}