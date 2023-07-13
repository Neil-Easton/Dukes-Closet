import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { selectCartItems } from "../../store/cart/cart.selector";

import {CheckoutContainerStyledDiv, CheckoutHeaderStyledDiv, HeaderBlockStyledH2, TotalStyledDiv} from "./checkout.styles";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);

  const calculateSum = () => {
    let sum = 0;

    for (let item of cartItems) {
      if (item.quantity)
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
