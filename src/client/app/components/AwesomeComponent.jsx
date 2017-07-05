import React, { Component } from 'react';

export default class AwesomeComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            likesCount : 0
        };
        this.onLike = this.onLike.bind(this);
    }

    onLike () {
        let newLikes = this.state.likesCount + 1;
        this.setState({likesCount: newLikes});
    }

    render(){
        return(
            <div>
                Likes: <span>{this.state.likesCount}</span>
                <div>
                    <button onClick={this.onLike}>Like that</button>
                </div>
            </div>
        );
    }
}