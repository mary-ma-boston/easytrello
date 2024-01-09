import React, { useState } from "react";
import List from "./List";

const Board = () => {
  const [lists, setLists] = useState([
    { id: 1, title: "To Do", cards: [{ id: 1, text: "Task 1" }] },
    { id: 2, title: "In Progress", cards: [{ id: 2, text: "Task 2" }] },
    { id: 3, title: "Done", cards: [{ id: 3, text: "Task 3" }] },
  ]);

  const handleCardAdd = (idx) => {
    const newCard = { id: Date.now(), text: "new Task" };
    const updateList = [...lists];
    updateList[idx].cards.push(newCard);
    setLists(updateList);
  };

  const handleCardDelete = (idx, delCardId) => {
    const tempCard = lists[idx].cards;
    let newCard = tempCard.filter((card) => card.id !== delCardId);
    const updateList = [...lists];
    updateList[idx].cards = newCard;
    setLists(updateList);
  };

  return (
    <div className="board">
      {lists.map((list, index) => (
        <List
          key={list.id}
          title={list.title}
          cards={list.cards}
          onCardAdd={() => handleCardAdd(index)}
          onCardDelete={(cardId) => handleCardDelete(index, cardId)}
        />
      ))}
    </div>
  );
};

export default Board;
