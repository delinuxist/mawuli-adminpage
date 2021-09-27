import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUsers } from "../../actions/userActions";

const Users = ({ user: { users }, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <ul>
      {users.map((user) => {
        return (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        );
      })}
    </ul>
  );
};

Users.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsers })(Users);
