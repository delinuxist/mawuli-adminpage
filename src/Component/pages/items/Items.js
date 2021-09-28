import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getItems } from "../../../actions/itemActions";

const Items = ({ item: { items }, getItems }) => {
  useEffect(() => {
    getItems();
  }, [getItems]);
  return (
    <div className="card-align mt-5">
      {items.map((item) => {
        return (
          <div className="card shadow card-width text-center mt-3">
            <div className="card-body" key={item.id}>
              {item.itemName}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  item: state.item,
});
export default connect(mapStateToProps, { getItems })(Items);
