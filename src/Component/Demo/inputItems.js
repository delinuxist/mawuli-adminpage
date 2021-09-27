import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../../actions/itemActions";

const inputItems = ({ addItem }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [item, setItem] = useState("");

  const OnChange = (e) => {
    setItem(e.target.value);
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    addItem(item);
    console.log(item);
  };

  return (
    <div>
      <label htmlFor="Items">Items</label>
      <input type="text" name="item" value={item} onChange={OnChange} />
      <button onClick={OnSubmit}>submit</button>
    </div>
  );
};

export default connect(null, { addItem })(inputItems);
