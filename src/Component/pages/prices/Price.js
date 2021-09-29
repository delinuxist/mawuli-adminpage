import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPrice } from "../../../actions/priceActions";

const Price = ({ price: { prices }, getPrice }) => {
  useEffect(() => {
    getPrice();
  }, [getPrice]);

  // const data = prices;

  return (
    <div className="card-align mt-5">
      {prices.map((item, index) => {
        return (
          <div className="card shadow text-center mt-3 card-width">
            <div key={index} className="card-body">
              {item.name} {item.amount}
            </div>
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
