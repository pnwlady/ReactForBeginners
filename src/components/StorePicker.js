import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }
    myInput = React.createRef();

    goToStore = (event) => {
        //stop from from submitting
        event.preventDefault();
        // get the text from input
       const storeName = this.myInput.value.value;
       //chage the page to /store/whatever they entered
       this.props.history.push(`/store/${storeName}`);
    }

    componentDidMount() {
        console.log("mounted");
        console.log(this);
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A Store</h2>
                <button ></button>
                <input
                    type="text"
                    ref={this.myInput}
                    required
                    placedholder="Store Name"
                    defaultValue={getFunName()} />
                <button type="submit">Visit Store </button>
            </form>
        )
    }
}

export default StorePicker;