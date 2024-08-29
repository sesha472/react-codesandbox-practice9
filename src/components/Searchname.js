import React, { useState } from "react";

const Searchname = () => {
  const [inputvalue, setinputvalue] = useState("");

  const inputchangeHandler = (e) => {
    setinputvalue(e.target.value);
  };

  return (
    <div>
      <h1>Entered Text :{inputvalue}</h1>
      <input
        type="text"
        name="inputvalue"
        value={inputvalue}
        onChange={inputchangeHandler}
      />
    </div>
  );
};

export default Searchname;
