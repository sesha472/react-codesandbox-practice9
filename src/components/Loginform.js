import React, { useState } from "react";
const Loginform = () => {
  const [data, setdata] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;
  const inputdataHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <p>this is login form</p>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={inputdataHandler}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={inputdataHandler}
        />
        <br />

        <input type="submit" name="submit" />
      </form>
    </div>
  );
};

export default Loginform;
