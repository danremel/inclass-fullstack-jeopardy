import React, { Component } from 'react';
import Category from './Category';
class GameBoard extends Component {
    render() {
        return (
            <div>
                <Category categories={this.props.categories} questions={this.props.questions}/>
            </div>
        );
    }
}

export default GameBoard;