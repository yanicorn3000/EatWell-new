import { createContext, useContext } from "react";
import { useLocalStorageState } from "./localStorage";

const appContext = createContext({
  user: {
    data: undefined,
    login: () => {},
    logout: () => {},
  },
  userProducts: undefined,
});

const USER_LS_KEY = "user_data";
const USER_PRODUCTS_LS_KEY = "user_products_data";

export const AppContextProvider = (props) => {
  const [userData, setUserData] = useLocalStorageState(USER_LS_KEY);
  const [userProducts, setUserProducts] = useLocalStorageState(
    USER_PRODUCTS_LS_KEY,
    []
  );

  const findProduct = (product) =>
    userProducts.find((p) => p.code === product.code);

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
        userProducts: userData
          ? {
              data: userProducts,
              add: (product) => {
                const hasProduct = findProduct(product);
                !hasProduct
                  ? setUserProducts([...userProducts, product])
                  : alert("Ten produkt juz jest na liście zapisanych");
              },
              remove: (productCode) => {
                setUserProducts(
                  userProducts.filter((p) => p.code !== productCode)
                );
              },
              findProduct,
            }
          : undefined,
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

export const useUserProducts = () => {
  const { userProducts } = useContext(appContext);

  return userProducts;
};
