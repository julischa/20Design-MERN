import axios from "axios";
import React, { createContext, useState } from "react";

// 2. Create Context / Store

export const AuthContext = createContext();

// 3. Create provider
export const AuthContextProvider = (props) => {
  const [isUser, setIsUser] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  const loginFunction = async (formData) => {
    console.log("formData", formData);
    try {
      const { data } = await axios.post(
        "https://20-design-mern.vercel.app/api/user/login",
        formData
      );

      if (data) {
        setUser(data.user);
      }
    } catch (error) {
      setErrors(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsUser(false);
    setUser(null);
  };

  const getPersonalProfile = async () => {
    try {
      //const user = await userController.getPersonalProfile();
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

  const signUp = async (userName, email, password) => {
    try {
      const { data } = await axios.post(
        "https://20-design-mern.vercel.app/api/user/signup",
        {
          userName,
          email,
          password,
        }
      );

      console.log(data);
      if (data) {
        setUser(data.user);
      }
      // display success message to user
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data.message);
    }
  };

  // 4. Move state and function

  return (
    <AuthContext.Provider
      value={{
        loginFunction,
        signUp,
        logout,
        isUser,
        user,
        setUser,
        getPersonalProfile,
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
