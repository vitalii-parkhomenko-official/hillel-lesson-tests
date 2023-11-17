import { FETCH_PRODUCTS } from "./constants";

const INITIAL_STATE = {
  data: [],
  status: "none"
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PRODUCTS: {
      switch (action.status) {
        case undefined:
          return {
            data: state.data,
            status: "loading"
          }
        case "success":
          return {
            data: action.payload,
            status: "success"
          };
        case "failure":
        default:
          return {
            data: state.data,
            status: "failure"
          };
      }
    }
    default:
      return state;
  }
}

export default reducer;
