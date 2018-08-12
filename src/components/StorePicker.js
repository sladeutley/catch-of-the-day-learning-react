import React from "react";
import { getFunName } from "../helpers"; // just using this function from helpers.js (which is just regular javascript)

// put a class as capitalized bc it indicates to us that it's a class and reusable
// Also, every class in react needs at least one method inside it, called render, which determines what html elements do i render to the dom/page

class StorePicker extends React.Component {
  // // constructor function is used if don't use fat arrow on goToStore function
  // constructor() { //constructor method is a method that will run before the StorePicker component is created
  //   super(); //will run the component we're extended first
  //   this.goToStore = this.goToStore.bind(this); //overwrites the method on it and puts binding of our own methods
  // } // -------> making fat arrow for 'goToStore = (event) =>' achieves the same thing bc it declares it as a property that is bound to the instance, which allows us to access 'this'.

  myInput = React.createRef();
  // goToStore() {
  //   console.log("going to store"); // when this click event happens with just a console log, it refreshes page bc the default action of a form is to submit that data to action of the form. But bc not using a server side, don't want to do this, **** want to do below where we pass in an 'event' object that's full of methods that have information of what happened .
  // }
  goToStore = event => {
    // *** this fat arrow replaces need for constructor function
    // 1. stop the form from submitting
    event.preventDefault(); //stops page from submitting
    console.log("going to store");
    // 2. get the text from that input - this is why we need ref!
    console.log(this);
    const storeName = this.myInput.value.value //it's value.value bc the first value is a react thing, then the second value is javascript
    // 3. change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    // *** could do below, kinda like document.createElement
    // return React.createElement('p', { className: 'hey'}, 'Heyyyoooo')
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/* Above, for the event listener onSubmit, in react we do event listeners in line, unlike javascript where we have a button with id/class of button in html, then call on that button and put a click event with function attached in javascript. **We also put function that click event will trigger within this component before the 'render()' */}
        {/* Note, 'this' is always equal to the component */}
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          // above, allows us to reference the input here, or in general any dom node on the page, like what document.querySelector does. **Note, must 'createRef()' at the top of the component so you can grab it here
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        {/* Above, must use defaultValue, not value (like in regular html), with react  */}
        <button type="submit">Visit Store -></button>
        {/* how do I make the side arrow */}
      </form>
    );

    // *********** if have sibling tags (not sure exactly what that is?), like a p tag before the form tag, MUST put it in a <React.Fragment>, or import { Fragment } at top of page (e.g. import React, { Fragment } from "react";), then can just put <Fragment> -->
    // return (
    //   <React.Fragment>
    //     <p>fish</p>
    //     <form className="store-selector">
    //       <h2>Please Enter Search</h2>
    //     </form>
    //   </React.Fragment>
    // );
  }
}

export default StorePicker;
