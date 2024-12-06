import { fetchFromAPI } from "./api";

export const getUsers = () => {
  return fetchFromAPI("http://localhost:3001/users");
};

export const updateUser = (id, newData) => {
  return fetchFromAPI(`http://localhost:3001/users/${id}`, {
    method: "PUT",
    body: newData,
  });
};

export const createUser = (user) => {
  return fetchFromAPI(`http://localhost:3001/users`, {
    method: "POST",
    body: user,
  });
};
