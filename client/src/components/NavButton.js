import React from 'react';

class NavButton extends React.Component {
    render() {
        return (
            <button className={this.props.btnClass}>
                {this.props.elm === "h1" ? <h1>
                    {this.props.name}
                </h1>
                    : <h2>
                        {this.props.name}
                    </h2>
                }
            </button>
        )
    }
}
export default NavButton;