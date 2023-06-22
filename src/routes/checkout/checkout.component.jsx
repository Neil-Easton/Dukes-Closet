import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {CheckoutContainerStyledDiv, CheckoutHeaderStyledDiv, HeaderBlockStyledH2, TotalStyledDiv} from "./checkout.styles.jsx";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const calculateSum = () => {
    let sum = 0;

    for (let item of cartItems) {
      sum += item.price * item.quantity;
    }

    return sum;
  };

  return (
    <CheckoutContainerStyledDiv>
      <CheckoutHeaderStyledDiv>
        <HeaderBlockStyledH2>product</HeaderBlockStyledH2>
        <HeaderBlockStyledH2>description</HeaderBlockStyledH2>
        <HeaderBlockStyledH2>quantity</HeaderBlockStyledH2>
        <HeaderBlockStyledH2>price</HeaderBlockStyledH2>
        <HeaderBlockStyledH2>remove</HeaderBlockStyledH2>
      </CheckoutHeaderStyledDiv>

      {cartItems.map((cartItem) => {
        return <CheckoutItem cartItem={cartItem} key={cartItem.id} />;
      })}

      <TotalStyledDiv>TOTAL:${calculateSum()}</TotalStyledDiv>
    </CheckoutContainerStyledDiv>
  );
};

export default Checkout;
