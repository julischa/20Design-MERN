// 1. Import hook
import React, { createContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserController from "../controllers/UserController";

// 2. Create Context / Store

export const AuthContext = createContext();

// 3. Create provider
export const AuthContextProvider = (props) => {
  const [isUser, setIsUser] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const email = useRef();
  const password = useRef();
  const redirectTo = useNavigate();

  const userController = new UserController();

  const login = async () => {
    try {
      const { token, user } = await userController.login({
        email: email.current.value,
        password: password.current.value,
      });
      localStorage.setItem("token", token);
      setIsUser(true);
      setErrors(null);
      setUser(user);
      redirectTo("/profile");
    } catch (error) {
      setErrors(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsUser(false);
    setUser(null);
    redirectTo("/");
  };

  const getPersonalProfile = async () => {
    try {
      const user = await userController.getPersonalProfile();
      setUser(user);
    } catch (error) {
      console.log("Error getting profile", error);
      logout();
    }
  };

  const checkIfUserIsLoggedIn = () => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("User is logged in");
      getPersonalProfile();
      setIsUser(true);
      setLoading(false);
    } else {
      console.log("User is NOT logged in");
      setIsUser(false);
      setLoading(false);
    }
  };

  // 4. Move state and function

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isUser,
        user,
        setUser,
        getPersonalProfile,
        email,
        password,
        loading,
        errors,
        setErrors,
        checkIfUserIsLoggedIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
