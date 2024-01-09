import React from "react";

const Card = ({ text, onDelete }) => {
  return (
    <div className="card">
      <p>{text}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Card;
