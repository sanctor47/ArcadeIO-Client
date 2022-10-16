import React, { useState, useEffect, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  loginUser,
  registerUser,
  getUserById,
} from "../services/User.services";



const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};
// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const login = (email, password) => {
    const resdata = loginUser({ email, password });
    setUser(resdata);
    localStorage.setItem("user", JSON.stringify(resdata));
    navigate("/")
    return resdata;
  };
  const signup = (data) => {
    const resData = registerUser(data);
    setUser(resData);
    // console.log(`Signup: ${JSON.stringify(resData)}`);
    localStorage.setItem("user", JSON.stringify(resData));
    navigate("/login")
    return resData;
  };
  const signout = () => {
    localStorage.removeItem("user");
    navigate("/login")
  };
  //   const sendPasswordResetEmail = (email) => {
  //     return firebase
  //       .auth()
  //       .sendPasswordResetEmail(email)
  //       .then(() => {
  //         return true;
  //       });
  //   };
  //   const confirmPasswordReset = (code, password) => {
  //     return firebase
  //       .auth()
  //       .confirmPasswordReset(code, password)
  //       .then(() => {
  //         return true;
  //       });
  //   };
  // Subscribe to user on mount
  // Because this sets state in the callback it will cause any ...
  // ... component that utilizes this hook to re-render with the ...
  // ... latest auth object.
  //   useEffect(() => {
  //     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //       if (user) {
  //         setUser(user);
  //       } else {
  //         setUser(false);
  //       }
  //     });
  //     // Cleanup subscription on unmount
  //     return () => unsubscribe();
  //   }, []);
  // Return the user object and auth methods
  return {
    user,
    login,
    signup,
    signout,
    // sendPasswordResetEmail,
    // confirmPasswordReset,
  };
}
