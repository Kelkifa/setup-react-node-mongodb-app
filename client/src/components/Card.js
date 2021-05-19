import React from 'react';
import './Card.scss';

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.imgLink} />
                <p>{this.props.children}</p>
                <div className="card-btn-container">
                    <button className="btn--card">Go Somewhere</button>
                </div>
            </div>
        )
    }
}

export default Card;