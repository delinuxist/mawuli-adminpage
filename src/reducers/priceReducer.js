import { GET_PRICES, ADD_PRICE } from "../actions/types";

const initialState = {
  prices: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRICES:
      return {
        ...state,
        prices: action.payload,
      };
    default:
      return state;
  }
};
