import { createContext, useContext, useState, useEffect } from "react";

const getLocalStorageData = (key) => {
  try {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  } catch (e) {
    return undefined;
  }
};

export const useLocalStorageState = (KEY, initialState = undefined) => {
  const [data, setStateData] = useState(
    getLocalStorageData(KEY) ?? initialState
  );

  const setData = (data) => {
    if (data) {
      localStorage.setItem(KEY, JSON.stringify(data));
    } else {
      localStorage.removeItem(KEY);
    }

    setStateData(data);
  };

  return [data, setData];
};
