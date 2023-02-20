import { createContext, useState, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase";

export const UserConext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unSubscribe;
  }, []);
  // const [currentUser, setCurrentUser] = useState(null);

  const User_Types = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
  };

  const UserReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case User_Types.SET_CURRENT_USER:
        return {
          currentUser: payload,
        };
      default:
        throw new Error(`unhandled type ${type} in userReducer`);
    }
  };

  const INITIAL_USER = {
    currentUser: null,
  };
  const [state, dispatch] = useReducer(UserReducer, INITIAL_USER);
  const { currentUser } = state;
  const setCurrentUser = (user) => {
    dispatch({
      type: User_Types.SET_CURRENT_USER,
      payload: user,
    });
  };
  const value = { currentUser, setCurrentUser };
  return <UserConext.Provider value={value}>{children}</UserConext.Provider>;
};
