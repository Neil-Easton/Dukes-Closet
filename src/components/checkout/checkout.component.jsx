import "./checkout.styles.scss";
import CheckoutItem from "../checkout-item/checkout-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
    const {cartItems} = useContext(CartContext);

    const calculateSum = () => {
        let sum = 0;

        for (let item of cartItems) {
            sum += item.price * item.quantity;
        }

        return sum;
    }

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <h2 className="header-block">product</h2>
                <h2 className="header-block">description</h2>
                <h2 className="header-block">quantity</h2>
                <h2 className="header-block">price</h2>
                <h2 className="header-block">remove</h2>
            </div>

            {
                cartItems.map(cartItem => {
                    return <CheckoutItem cartItem={cartItem} key={cartItem.id}/>
                })
            }
            
            <div className="total">TOTAL:${calculateSum()}</div>
        </div>
    )
}

export default Checkout;