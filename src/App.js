import React from 'react';

import theme from './App.css';

class App extends React.Component {
  render() {
    return (
      <div className={theme.root}>
        <h1 className={theme.header}>
          Hello World!
        </h1>
      </div>
    );
  }
}

export default App;
