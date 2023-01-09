import React from "react";
import ExpenseItem from "../../UI/expenseItem/ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses, style, removeHandler }) => {
  return (
    <ul className="ul_ka">
      {expenses.map((elem) => {
        return (
          <ExpenseItem
            className={style}
            title={elem.title}
            date={elem.date}
            price={elem.price}
            removeHandler={removeHandler}
            id={elem.id}
          />
        );
      })}
    </ul>
  );
};

export default Expenses;
