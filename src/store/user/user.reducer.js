import USER_ACTION_TYPES from "./user.types";

const INITIAL_USER = {
  currentUser: null,
};

export const UserReducer = (state = INITIAL_USER, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
