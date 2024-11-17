import { createContext, useContext, useState, useEffect } from "react";

const appContext = createContext({
  user: {
    data: undefined,
    login: () => {},
    logout: () => {},
  },
});

const USER_LS_KEY = "user_data";

const getUserData = () => {
  try {
    const userData = localStorage.getItem(USER_LS_KEY);
    return JSON.parse(userData);
  } catch (e) {
    return undefined;
  }
};

export const AppContextProvider = (props) => {
  const [userData, setUserData] = useState(getUserData());

  useEffect(() => {
    if (userData) {
      localStorage.setItem(USER_LS_KEY, JSON.stringify(userData));
    } else {
      localStorage.removeItem(USER_LS_KEY);
    }
  }, [userData]);

  return (
    <appContext.Provider
      value={{
        user: {
          data: userData,
          login: (email, password) => {
            if (email === "test@test.pl" && password === "test") {
              setUserData({
                firstName: "Andrzej",
                lastName: "Rakieta",
                email,
              });
            }
          },
          logout: () => {
            setUserData(undefined);
          },
        },
      }}
    >
      {props.children}
    </appContext.Provider>
  );
};

export const useUser = () => {
  const { user } = useContext(appContext);

  return {
    ...user,
    isLoggedIn: Boolean(user.data),
  };
};
