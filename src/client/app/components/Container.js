import React, { Component } from 'react'
import './Container.css';
import Post from './Post';

export default class Container extends Component {
    render() {
        return(
            <div className="container">
                <Post />
            </div>
        );
    };
}