import styled from 'styled-components';

export const CartDropdownContainerStyledDiv = styled.div`
  position: absolute;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 10px;
  z-index: 5;

  button {
    margin-top: auto;
    font-size: 14px;
  }

  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }
`;

export const CartItemsStyledDiv = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

// .cart-dropdown-container {
//   position: absolute;
//   width: 300px;
//   height: 340px;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
//   border: 1px solid black;
//   background-color: white;
//   top: 80px;
//   right: 10px;
//   z-index: 5;

//   .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }

//   .cart-items {
//     height: 240px;
//     display: flex;
//     flex-direction: column;
//     overflow: scroll;
//   }

//   button {
//     margin-top: auto;
//     font-size: 14px;
//   }
// }
  