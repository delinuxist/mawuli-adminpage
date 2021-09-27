import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getItems } from "../../actions/itemActions";

const Items = ({ item: { items }, getItems }) => {
  useEffect(() => {
    getItems();
  }, [getItems]);
  return (
    <ul>
      {items.map((item) => {
        return <li key={item.id}>{item}</li>;
      })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  item: state.item,
});
export default connect(mapStateToProps, { getItems })(Items);
