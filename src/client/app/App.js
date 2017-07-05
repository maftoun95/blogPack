import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Container from './components/Container'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Intro />
                <Container />
            </div>
        )
    }
}

render(<App />, document.querySelector('.app'));