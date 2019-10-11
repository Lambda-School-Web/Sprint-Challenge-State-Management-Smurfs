import React from "react";
import { useDispatch } from "react-redux";
import { deleteSmurf } from "../actions";

const Smurf = ({ data }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteSmurf(data.id));
  };

  return (
    <>
      <p>{data.name}</p>
      <p>{data.age}</p>
      <p>{data.height}</p>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default Smurf;
