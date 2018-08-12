import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
  // creating state
  // 1. use a property to delare empty (initial) state (could do all that super() stuff, but this way is better)
  state = {
    fishes: {},
    order: {}
  };
  // 2. how do we get an item into state?
  // cant update it directly from add fish form bc ****methods that update state and the actualy state NEED TO LIVE IN EXACT SAME COMPONENT
  addFish = fish => {
    console.log("Adding a fish!");
    // how do we get a function from app.js to a lower level of addfish component? The answer, is how do you get anything into a component?   - PROPS!!! So, we ---->
    // a. Take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // b. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // c. Set the new fishes object to state
    this.setState({
      // fishes: fishes
      // or in ES6 if your property and value are same thing
      fishes
    });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
        {/* Above is passing the addFish function to Inventory, then to addFish component through PROPS!!!! */}
      </div>
    );
  }
}

export default App;
