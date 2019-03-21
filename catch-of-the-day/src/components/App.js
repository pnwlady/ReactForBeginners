import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
// import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
          <Inventory />
        </div>
      </div>
    )
  }
}
export default App;
