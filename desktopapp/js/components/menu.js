import React from 'react';

const Menu = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <a href="#"><i className="fa fa-search fa-3x" aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-upload fa-3x" aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-download fa-3x" aria-hidden="true"></i></a>
      </div>
    );
  }
});

export default Menu;
