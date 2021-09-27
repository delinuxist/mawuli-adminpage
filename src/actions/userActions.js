import { GET_USERS, ADD_USER, USERS_ERROR } from "./types";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await fetch("/users");
    const data = await res.json();

    dispatch({
      type: GET_USERS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USERS_ERROR,
      payload: err.response.data,
    });
  }
};

export const addUsers = (user) => async (dispatch) => {
  try {
    const res = await fetch("/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();

    dispatch({
      type: ADD_USER,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USERS_ERROR,
      payload: err.response.data,
    });
  }
};
