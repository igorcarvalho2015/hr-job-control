import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu';
import MainWindow from './components/mainwindow';


const App = React.createClass({
  render: function() {
    return (
      <div>
        <Menu />
        <MainWindow />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
