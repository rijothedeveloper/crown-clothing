import { createContext, useState, useEffect } from "react";
import {
  auth,
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  signOutUser,
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
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserConext.Provider value={value}>{children}</UserConext.Provider>;
};
