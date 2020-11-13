import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { AddListUser } from "./addListUserReducer";

const rootReducers = combineReducers({
  userReducer,
  AddListUser,
});

export { rootReducers };
