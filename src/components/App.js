import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

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
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          {/* Below, don't want to just repeat over an array here in list bc want it to be reusable, so need to make a component */}
          <ul className="fishes">
            {/* NO BUILT IN LOOPING IN JSX SO HAVE TO USE REGULAR JAVASCRIPT IN JSX. Javascript IS DENOTED BY {} in jsx, TO LOOP THROUGH ITEMS. HERE, BC NOT AN ARRAY, ***** WE MUST USE OBJECT.KEYS to get an array of the keys, so we can loop through all the keys we have --> try console logging Object.keys(this.state.fishes) to see */}
            {console.log(Object.keys(this.state.fishes))}
            {/* {Object.keys(this.state.fishes).map(key => <p>{key}</p>)} */}
            {/* ******* Above is the javscript, but in react must give each item a unique identifier, and do that with something built into react called ****key, which is below along with rendering the Fish component and the fish info (using PROPS of course, bc that's how data gets passed in react!!!! AND TO MAKE DYNAMIC, HAVE TO USE BRACKET NOTATION IN details={this.state.fishes[key] BC KEY IS A VARIABLE DEFINED AS THE OBJECT"S KEY, NOT THE ACTUAL PROPERTY'S KEY*/}
            {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]}/>)}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
        {/* Above is passing the addFish function to Inventory, then to addFish component through PROPS!!!! */}
      </div>
    );
  }
}

export default App;
