import { GET_PRICES, ADD_PRICE } from "./types";

export const getPrice = () => async (dispatch) => {
  try {
    const res = await fetch("/prices");
    const mydata = await res.json();
    const data = mydata[0]["itemPrice"];
    dispatch({
      type: GET_PRICES,
      payload: data,
    });
  } catch (err) {
    console.err(err.response.data);
  }
};
