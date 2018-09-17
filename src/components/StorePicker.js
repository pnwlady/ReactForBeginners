import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    goToStore() {
        console.log("going to the store");
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <button ></button>
                <input type="text" required placedholder="Store Name" defaultValue={getFunName()} />
                <button type="submit">Visit Store </button>
            </form>
        )
    }
}

export default StorePicker;