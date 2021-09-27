import { combineReducers } from "redux";
import userReducer from "./userReducer";
import priceReducer from "./priceReducer";
import itemReducer from "./itemReducer";

export default combineReducers({
  user: userReducer,
  price: priceReducer,
  item: itemReducer,
});
