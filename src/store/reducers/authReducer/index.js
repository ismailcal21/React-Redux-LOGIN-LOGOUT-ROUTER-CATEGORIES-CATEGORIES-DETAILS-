export const SET_TOKEN = "set_token";
export const REMOVE_TOKEN = "remove_token";

const token = localStorage.getItem("token");

const initialState = {
  token: token,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload.token,
      };
    case REMOVE_TOKEN:
      return {
        ...state,
        token: null,
      };

    default:
      return state;
  }
};

export default authReducer;
