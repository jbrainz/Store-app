import React from "react";
import Collections from "../layouts/Collections";

const CollectionScreen = ({ match }) => {
  let value = match.params.value;
  switch (value) {
    case "sportshirt":
      return <Collections value="Sport Shirt" />;
    case "shortsleeve":
      return <Collections value="Short Sleeve" />;
    case "polo":
      return <Collections value="Polos" />;
    case "t-shirt":
      return <Collections value="T-Shirts" />;
    case "dressshirts":
      return <Collections value="Dress Shirts" />;
    case "sportcoats":
      return <Collections value="Sports Coats" />;
    case "tops":
      return <Collections value="Top" />;
    case "bottoms":
      return <Collections value="Bottom" />;
    case "dresses":
      return <Collections value="Dresses" />;
    case "jackets":
      return <Collections value="Jackets" />;
    default:
      break;
  }
};

export default CollectionScreen;
