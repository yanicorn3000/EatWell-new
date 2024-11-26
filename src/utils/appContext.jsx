import { createContext, useContext } from "react";
import { useLocalStorageState } from "./localStorage";
import { getUsers, updateUser } from "./users";

const appContext = createContext({
  user: {
    data: undefined,
    login: () => {},
    logout: () => {},
    update: () => {},
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
          login: async (email, password) => {
            const users = await getUsers();

            const user = users.find(
              (u) => u.email === email && u.password === password
            );

            if (!user) {
              throw new Error("User not found");
            }

            setUserData(user);
          },
          update: async (newData) => {
            await updateUser(userData.id, {
              ...userData,
              ...newData,
            });
            setUserData({
              ...userData,
              ...newData,
            });
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
