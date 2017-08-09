import React, { Component } from 'react';
import Question from './Question';
class Category extends Component {
    render() {
        return (
            <div>
                {this.props.categories.name}
                <div>
                    <Question questions={this.props.questions}/>
                </div>
            </div>
        );
    }
}

export default Category;