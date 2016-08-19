import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu';


const App = React.createClass({
  render: function() {
    return (
      <div>
        <Menu />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
