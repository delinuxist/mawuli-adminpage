import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUsers } from "../../../actions/userActions";

const Users = ({ user: { users }, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="card-align mt-5">
      {users.map((user) => {
        return (
          <div className="card shadow text-center mt-3 card-width">
            <div key={user.id} className="card-body">
              {user.firstName} {user.lastName}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Users.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsers })(Users);
