import React from 'react';

const Menu = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <div className="menu-container">
          <div className="menu-inner">
            <a href="#"><i className="fa fa-search fa-2x" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-upload fa-2x" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-download fa-2x" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    );
  }
});

export default Menu;
