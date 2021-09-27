import { ADD_ITEM, GET_ITEMS } from "./types";

export const getItems = () => async (dispatch) => {
  try {
    const res = await fetch("/items");
    const data = await res.json();

    dispatch({
      type: GET_ITEMS,
      payload: data,
    });
  } catch (err) {
    console.error(err.response.data);
  }
};

export const addItem = (item) => async (dispatch) => {
  try {
    const res = await fetch("/items", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: ADD_ITEM,
      payload: data,
    });
  } catch (err) {
    console.err(err.response.data);
  }
};
