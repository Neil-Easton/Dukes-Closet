import styled from 'styled-components';

export const ItemListStyledDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-auto-rows: 385px;
    grid-gap: 20px;
`;

export const LoadMoreCardStyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const LoadMoreButtonStyledH1 = styled.h1`
    margin: 0;
    font-size: 70px;
`;


// .item-list {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, 300px);
//     grid-auto-rows: 385px;
//     grid-gap: 20px;
// }

// .load-more-card {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;
// }

// .load-more-button {
//     margin: 0;
//     font-size: 70px;
// }