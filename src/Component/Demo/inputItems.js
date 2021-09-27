import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../../actions/itemActions";

const InputItems = ({ addItem }) => {
  const [item, setItem] = useState({
    itemName: "",
  });

  const { itemName } = item;

  const OnChange = (e) => {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    const newItem = { itemName };
    addItem(newItem);
  };

  return (
    <div>
      <label htmlFor="Items">Items</label>
      <input type="text" name="itemName" value={itemName} onChange={OnChange} />
      <button onClick={OnSubmit}>submit</button>
    </div>
  );
};

export default connect(null, { addItem })(InputItems);
