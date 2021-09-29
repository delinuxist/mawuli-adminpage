import { GET_PRICES, ADD_PRICE } from "./types";

export const getPrice = () => async (dispatch) => {
  try {
    const res = await fetch("/prices");
    const data = await res.json();

    dispatch({
      type: GET_PRICES,
      payload: data,
    });
  } catch (err) {
    console.err(err.response.data);
  }
};
