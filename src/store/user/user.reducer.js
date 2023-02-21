const User_Types = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_USER = {
  currentUser: null,
};

export const UserReducer = (state = INITIAL_USER, action) => {
  const { type, payload } = action;
  switch (type) {
    case User_Types.SET_CURRENT_USER:
      return {
        currentUser: payload,
      };
    default:
      return state;
  }
};
