import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, price, removeHandler, id }) => {
  const deleteItem = () => {
    removeHandler(id);
  };
  return (
    <div>
      <div className="itemDiv">
        <p className="dates"> {new Date(date).toString()}</p>
        <p className="titles">{title}</p>
        <p className="prices"> {price}сом </p>
      </div>
      <button className="delete" onClick={deleteItem}>
        Удалить
      </button>
    </div>
  );
};

export default ExpenseItem;
