import styled from 'styled-components';

export const CategoryStyled = styled.div`
    h1 {
        text-align: center;
        text-transform: capitalize;
        margin-bottom: 80px;
    }
`;

export const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-auto-rows: 385px;
    gap: 20px;
`;



// .category {
//     h1 {
//         text-align: center;
//         text-transform: capitalize;
//         margin-bottom: 80px;
//     }

//     .product-container {
//         display: grid;
//         grid-template-columns: repeat(auto-fit, 300px);
//         grid-auto-rows: 385px;
//         gap: 20px;
//     }
// }