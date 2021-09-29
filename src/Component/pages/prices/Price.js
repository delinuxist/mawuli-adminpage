import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPrice } from "../../../actions/priceActions";

const Price = ({ price: { prices }, getPrice }) => {
  useEffect(() => {
    getPrice();
  }, [getPrice]);

  const data = prices[0].itemPrice;

  return (
    <div>
      {data.map((item, index) => {
        return (
          <div>
            {item.name} {item.price}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  price: state.price,
});

export default connect(mapStateToProps, { getPrice })(Price);
