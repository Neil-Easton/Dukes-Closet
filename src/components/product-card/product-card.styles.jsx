import styled from 'styled-components';

export const ProductCardStyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    width: 300px;
    height: 385px;

    &:hover {
        opacity: 85%;
        
        Button {
            display: block;
        }
    }

    img {
        width: 100%;
        height: 350px;
        object-fit: cover;
    }

    Button {
        width: 80%;
        position: absolute;
        display: none;
        top: 275px;
        opacity: 0.7;
        // left: 65px;
    }
`;

export const TagStyledDiv = styled.div`
    display: flex;
    width: 100%;
    height: 35px;
    font-size: 1.3em;
    flex-direction: row;
    justify-content: space-between;
`;

// .product-card {
//     display: flex;
//     flex-direction: column;
//     position: relative;
//     align-items: center;
//     width: 300px;
//     height: 385px;

//     &:hover {
//         opacity: 85%;
        
//         Button {
//             display: block;
//         }
//     }

//     .tag {
//         display: flex;
//         width: 100%;
//         height: 35px;
//         font-size: 1.3em;
//         flex-direction: row;
//         justify-content: space-between;
//     }

//     img {
//         width: 100%;
//         height: 350px;
//         object-fit: cover;
//     }

//     Button {
//         width: 80%;
//         position: absolute;
//         display: none;
//         top: 275px;
//         opacity: 0.7;
//         // left: 65px;
//     }
// }