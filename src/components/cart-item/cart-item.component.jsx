import React from "react";
import { CartItemContainer, ItemDetailsContainer } from "./cart-item.styles";

import Cards from "../cards/cards.components";

const CartItem = ({ item: { specialization, enquiry } }) => (
  <CartItemContainer>
    <ItemDetailsContainer>
      <Cards
        specialization={specialization}
        enquiry={enquiry}
      />
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
