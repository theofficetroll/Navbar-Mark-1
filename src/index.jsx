import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: 14,
    }
  }

  render() {
    return (
      <div>
        WIP
      </div>
    )
  }
};

ReactDOM.render(<Navbar />, document.getElementById('Navbar'));