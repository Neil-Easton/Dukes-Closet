import styled from 'styled-components';

export const CheckoutItemContainerStyledDiv = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 15px;
    align-items: center;

    .image-container {
        width: 23%;
        padding-right: 15px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .name,
    .quantity,
    .price {
        width: 23%;
    }

    .quantity {
        display: flex;
        .arrow {
            cursor: pointer;
            margin: auto 9px;
            font-weight: bold;
        }
    }

    .remove-button {
        padding-left: 12px;
        cursor: pointer;
    }
`

// .checkout-item-container {
//     width: 100%;
//     display: flex;
//     min-height: 100px;
//     border-bottom: 1px solid darkgrey;
//     padding: 15px 0;
//     font-size: 15px;
//     align-items: center;

//     .image-container {
//         width: 23%;
//         padding-right: 15px;

//         img {
//             width: 100%;
//             height: 100%;
//         }
//     }

//     .name,
//     .quantity,
//     .price {
//         width: 23%;
//     }

//     .quantity {
//         display: flex;
//         .arrow {
//             cursor: pointer;
//             margin: auto 9px;
//             font-weight: bold;
//         }
//     }

//     .remove-button {
//         padding-left: 12px;
//         cursor: pointer;
//     }

// }