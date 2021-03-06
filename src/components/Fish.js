import React from "react";
import { formatPrice } from "../helpers"

class Fish extends React.Component {
  render() {
    // destructuring image and name, etc. from details object
    const { image, name, price, desc, status } = this.props.details;
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
          {/* Above is using formatPrice helper function to convert cents to dollars */}
        </h3>
        <p>{desc}</p>
        <button>Add To Cart</button>
      </li>
    )
  }
}

export default Fish;