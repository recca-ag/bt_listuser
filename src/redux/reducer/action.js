import { DELETE_USER, USER_EDIT, USER_ADD, ADD_USER_LIST } from "./constant";

export const actAddToList = (user) => {
  return {
    type: ADD_USER_LIST,
    user,
  };
};
