export const SET_APP_DATA = "set_appData";
export const REMOVE_APP_DATA = "remove_appData";

const initialState = {
  appData: null,
};

const appDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_APP_DATA:
      return {
        ...state,
        appData: action.payload.appData,
      };
    case REMOVE_APP_DATA:
      return {
        ...state,
        appData: null,
      };

    default:
      return state;
  }
};

export default appDataReducer;
