import { DELETE_USER, USER_EDIT, USER_ADD } from "./constant";
import data from "./../../components/data.json";
let initialState = { userList: data };
//console.log(data);

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER:
      return { ...state };

    default:
      return { ...state };
  }
};
export { userReducer };
