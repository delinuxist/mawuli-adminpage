import React, { useState } from "react";
import { connect } from "react-redux";
import { addUsers } from "../../actions/userActions";

const InputUsers = ({ addUsers }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  const { firstName, lastName } = user;

  const OnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    const newUsers = {
      firstName,
      lastName,
    };
    addUsers(newUsers);
  };
  return (
    <div>
      <label htmlFor="FirstName"> First Name</label>
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={OnChange}
      />
      <br />
      <label htmlFor="lastName"> Last Name</label>
      <input type="text" name="lastName" value={lastName} onChange={OnChange} />
      <br />
      <button onClick={OnSubmit}>Submit</button>
    </div>
  );
};

export default connect(null, { addUsers })(InputUsers);
