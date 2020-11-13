import { ADD_USER_LIST } from "./constant";
var data = JSON.parse(localStorage.getItem("user"));
var initalState = data ? data : [];
var findUserCart = (AddListUser, user) => {
  var index = -1;
  if (AddListUser.length > 0) {
    for (var i = 0; i < AddListUser.length; i++) {
      if (AddListUser[i].user.id === user.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};
const AddListUser = (state = initalState, action) => {
  var { user } = action;
  var index = -1;
  switch (action.type) {
    case ADD_USER_LIST:
      index = findUserCart(state, user);
      // if (index !== -1) {
      //   state[i];
      // } else {
      state.push({ user });
      //}

      localStorage.setItem("user", JSON.stringify(state));
      return { ...state };

    default:
      return { ...state };
  }
};
export { AddListUser };
