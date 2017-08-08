import React from 'react';

class CoordinatesButton extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}  >
        Click Me
      </button>
    );
  }
}

export default CoordinatesButton;
