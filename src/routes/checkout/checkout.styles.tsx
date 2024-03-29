import styled from 'styled-components';

export const CheckoutContainerStyledDiv = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
    font-size: 12px;
`;

export const CheckoutHeaderStyledDiv = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgray;
`;

export const HeaderBlockStyledH2 = styled.h2`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
        width: 8%;
    }
`;

export const TotalStyledDiv = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`;


// .checkout-container {
//     width: 55%;
//     min-height: 90vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin: 50px auto 0;
//     font-size: 12px;

//     .checkout-header {
//         width: 100%;
//         padding: 10px 0;
//         display: flex;
//         justify-content: space-between;
//         border-bottom: 1px solid darkgray;

//         .header-block {
            // text-transform: capitalize;
            // width: 23%;

            // &:last-child {
            //     width: 8%;
            // }
//         }
//     }

//     .total {
//         margin-top: 30px;
//         margin-left: auto;
//         font-size: 36px;
//     }
// }