import React, {Component} from 'react';

class Square extends Component {

    render() {
        return (
            <div className="Square">
                {this.props.content}
            </div>
        )
    }

}

export default Square;