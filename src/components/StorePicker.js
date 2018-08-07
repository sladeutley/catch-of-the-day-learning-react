import React from "react";
import { getFunName } from "../helpers"; // just using this function from helpers.js (which is just regular javascript)

// put a class as capitalized bc it indicates to us that it's a class and reusable
// Also, every class in react needs at least one method inside it, called render, which determines what html elements do i render to the dom/page

class StorePicker extends React.Component {
  render() {
    // *** could do below, kinda like document.createElement
    // return React.createElement('p', { className: 'hey'}, 'Heyyyoooo')
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} /> 
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
