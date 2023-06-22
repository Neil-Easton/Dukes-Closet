import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 5;
`;

export const LogoContainer = styled(Link)`
    // display: inline-block;
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const NavLinksContainer = styled.div`
    font-size: 25px;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: flex-end;
`;

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;

// .navigation {
//     height: 100%;
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 25px;
//     position: sticky;
//     top: 0;
//     background-color: white;
//     z-index: 5;

//     .logo-container {
//         // display: inline-block;
//         height: 100%;
//         width: 70px;
//         padding: 25px;
//     }

//     .nav-link-container {
//         font-size: 25px;
//         width: 50%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         position: relative;
//         justify-content: flex-end;

//         .nav-link {
//             padding: 10px 15px;
//             cursor: pointer;
//         }
//     }
// }