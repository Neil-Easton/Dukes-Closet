// Replaced by Redux implementation

// import { useState, createContext, useEffect, useReducer } from "react";

// import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// // export const UserContext = createContext({
// //     currentUser: null,
// //     setCurrentUser: () => null
// // });

// export const UserContext = createContext();

// export const USER_ACTION_TYPES = {
//     SET_CURRENT_USER: 'SET_CURRENT_USER'
// }

// const userReducer = (state, action) => {
//     // console.log('dispatched');
//     // console.log(action);
//     const {type, payload} = action;

//     switch(type) {
//         case 'SET_CURRENT_USER':
//             return {
//                 ...state,
//                 currentUser: payload
//             }
//         default:
//             throw new Error(`Unhandled type ${type} in userReducer`);
//     }
// }

// const INITIAL_STATE = {
//     currentUser: null
// }
// // 'UNHANDLED_TYPE'
// export const UserProvider = ({children}) => {
//     // const [currentUser, setCurrentUser] = useState(null);
//     const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);

//     const setCurrentUser = (user) => {
//         dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
//     }

//     const value = {currentUser, setCurrentUser};

//     useEffect(() => {
//         const checkStatus = onAuthStateChangedListener((user) => {
//             if (user) {
//                 createUserDocumentFromAuth({user});
//             }
            
//             setCurrentUser(user);
//         })

//         return checkStatus;
//     }, []);

//     return <UserContext.Provider value={value}>{children}</UserContext.Provider>    
// }