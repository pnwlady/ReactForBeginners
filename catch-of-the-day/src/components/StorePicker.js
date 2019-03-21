import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <form action="" className="store-selector">
      { /* to return multiple elements use React.Fragment and enclose all child elements within */ }
        <h2>Please Enter a Store</h2>
        <button type="submit">Visit Store →</button>
      </form>
    )
  }
}

export default StorePicker;
