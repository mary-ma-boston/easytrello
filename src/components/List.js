import React from "react";
import Card from "./Card";

const List = ({ title, cards, onCardDelete, onCardAdd }) => {
  return (
    <div className="list">
      <h3>{title}</h3>
      {cards.map((card, index) => (
        <Card
          key={index}
          text={card.text}
          onDelete={() => onCardDelete(card.id)}
        />
      ))}
      <button onClick={onCardAdd}>Add Card</button>
    </div>
  );
};

export default List;
