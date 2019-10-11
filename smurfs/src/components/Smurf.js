import React from "react";

const Smurf = ({ data }) => {
  return (
    <>
      <p>{data.name}</p>
      <p>{data.age}</p>
      <p>{data.height}</p>
    </>
  );
};

export default Smurf;
